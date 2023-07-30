"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignOutButton() {
  return (
    <button
      onClick={() => {
        console.log("OUT");
        signOut();
        redirect("@/u/signin");
      }}
    >
      Sign Out
    </button>
  );
}
