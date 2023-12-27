
// Ccomponents
// import { useState, useEffect } from 'react'

import SpotifyButton from "@/app/signin/apps/spotifybutton";

import Library from "@/app/u/[uid]/lib/lib"

import { headers } from "next/headers";

export default async function Public(props: { username: string }) {
  // const [data, setData] = useState(null);
  const res = await fetch('http://localhost:3000/api/user/data', {method: "GET", headers: headers()});
  const data = await res.json();

  return (
    <div>
      <h1>{data.name} (Editable)</h1>
      <p>{data.bio} (Editable)</p>
      { data.spotify_token == null ? 
        <SpotifyButton /> : 
        <>
          <div>
            <h1>Library</h1>
            <p>Your library contents are displayed below.</p>
            <br></br>
          </div>

          <Library 
            items={data.lib}
            spotify_token={data.spotify_token} />
        </>
      }
    </div>
  );
}
