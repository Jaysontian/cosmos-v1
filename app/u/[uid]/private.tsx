
// Ccomponents
// import { useState, useEffect } from 'react'

import SpotifyButton from "@/app/signin/apps/spotifybutton";
import { headers } from "next/headers";

// async function getData(/*pathname: string*/) {
//   const res = await fetch('http://localhost:3000/api/user/data', {
//       method: "GET",
//       headers: headers() // a server side component calling another API needs headers passed in
//   });

//   if (res.ok) return await res.json();
// }

export default async function Public(props: { username: string }) {
  // const [data, setData] = useState(null);
  const res = await fetch('http://localhost:3000/api/user/data', {method: "GET", headers: headers()});
  const data = await res.json();

  return (
    <div>
      <h1>{data.name} (Editable)</h1>
      <p>{data.bio} (Editable)</p>
      <h2>Spotify</h2>
      { data.spotify_token == null ? 
        <SpotifyButton /> : 
        <h2>You have connected your spotify account.</h2>
      }
    </div>
  );
}
