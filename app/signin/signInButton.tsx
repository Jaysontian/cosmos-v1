"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function signInButton() {
  return <button onClick={() => signIn()}>Sign In</button>;
}
