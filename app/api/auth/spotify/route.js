import { redirect } from 'next/navigation'

import NextResponse from 'next/server'
/* Route Handlers
    The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. 
    If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.
*/

export async function GET(request) {
    const client_id = process.env.SPOTIFY_CLIENT_ID; // Replace with your actual client_id
    const redirect_uri = 'http://localhost:3000/api/auth/spotify/callback';
    const state = (Math.random() + 1).toString(36).substring(7);
    const scope = 'user-read-private user-read-email';

    console.log("Redirect success");

    const queryParams = new URLSearchParams({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
    });

    return Response.json({
        link: `https://accounts.spotify.com/authorize?${queryParams.toString()}`
    });

    
}
