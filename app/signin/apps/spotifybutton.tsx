"use client";
import React from "react";


export default function spotifybutton() {

  const handleClick = async () => {
    try {
       const res = await fetch('/api/auth/spotify', { mode: 'no-cors' });
       if (res.ok) {
            const data = await res.json();
            window.location.href = data.link;
        } else {
            console.error('Failed to initiate redirect');
        }
    }
    catch {
      alert("error signing in to spotify");
    }
  }

  return (
    <>
    <button onClick={handleClick}>Add Spotify</button>
      {/* <button onClick={() => signIn("spotify", { callbackUrl: "/" })}>
        Authenticate with Spotify
      </button> */}
    </>
  );
}
