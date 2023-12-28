
// this server route /api/auth/spotify/callback is called when spotify auth is complete
// spotify auth returns a URL that contains a key, we then use the key to get access_token

import { redirect } from 'next/navigation'
import { headers } from "next/headers"
import { db } from "@/firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options"; 

const formBody = (details) => {
  return Object.keys(details)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
    .join('&')
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);  // the request contains the response url from spotify
    const code = searchParams.get("code");      // we search the url for the code and state
    //const state = searchParams.get("state");

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

    const session = await getServerSession(options);
    if (!session) {console.error("Problem with next-auth – no user session found.");}

    // Using the callback url data we call spotify api to retrieve user's TOKEN and Refresh Data
    // We set it within user's data
    fetch(spotifyURL, config).then(response => response.json()).then(token => {
        updateDoc(doc(db, "authID", session?.user.id), {
            spotify_token: token
        });
    });

    // on success
    console.log('You have authenticated spotify.');
    redirect("http://localhost:3000/u/" + session.user.username);

}
