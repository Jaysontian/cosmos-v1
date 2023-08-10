"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function spotifybutton() {
  return (
    <button onClick={() => signIn("spotify", { callbackUrl: "/" })}>
      Authenticate with Spotify
    </button>
  );
}
