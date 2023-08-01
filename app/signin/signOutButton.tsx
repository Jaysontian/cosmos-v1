"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => {
        console.log("OUT");
        signOut({ callbackUrl: "http://localhost:3000/signin" });
      }}
    >
      Sign Out
    </button>
  );
}
