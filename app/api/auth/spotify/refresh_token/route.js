
// this server route /api/auth/spotify/callback is called when spotify auth is complete
// spotify auth returns a URL that contains a key, we then use the key to get access_token

import { redirect } from 'next/navigation'
import { headers } from "next/headers"
import { db } from "@/firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options"; 

export async function GET(req) {
    const session = await getServerSession(options);
    if (!session) console.log('session contents DNE');
    if (!session.user.spotify_token.refresh_token) console.error('session does not have spotify token');
    
    const refresh_token = session.user.spotify_token.refresh_token;
    const refresh_uri = "https://accounts.spotify.com/api/token";
    const payload = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token,
            client_id: process.env.SPOTIFY_CLIENT_ID
        })
    };

    const body = await fetch(refresh_uri, payload);
    const token_response = await body.json();

    updateDoc(doc(db, "authID", session?.user.id), {
        spotify_token: token_response
    });

    return Response.json(token_response);
    
}
