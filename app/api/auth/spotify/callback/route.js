import { NextRequest, NextResponse } from "next/server";
import { redirect } from 'next/navigation'
import { headers } from "next/headers"

import { db } from "@/firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

const formBody = (details) => {
  return Object.keys(details)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
    .join('&')
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);  // the request contains the response url from spotify
    const code = searchParams.get("code");      // we search the url for the code and state
    const state = searchParams.get("state");

    const spotifyURL = 'https://accounts.spotify.com/api/token';
    
    const formData = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000/api/auth/spotify/callback", // not actual redirect, checksum
    }

    const config = {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: formBody(formData),
    };

    // Fetch username of currently logged in user using our API

    const res = await fetch('http://localhost:3000/api/user/id', {
        method: "GET",
        headers: headers() // a server side component calling another API needs headers passed in
    });

    if (res.ok) {
        const loggedInUserData = await res.json();
        const username = loggedInUserData.username;

        // Using the callback url data we call spotify api to retrieve user's TOKEN and Refresh Data
        // We set it within user's data
        fetch(spotifyURL, config).then(response => response.json()).then(token => {
            updateDoc(doc(db, "users", username), {
                spotify_token: token
            });
            console.log(token);
        });

        // on success
        console.log('You have authenticated spotify.');
        redirect("http://localhost:3000/u/" + username);

    } else {
        console.error('Failed to initiate redirect');
    }
}
