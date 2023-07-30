import { db } from "../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Public from "./public";
import SignOutButton from "@/app/signin/signOutButton";

// session + auth
import { getServerSession } from "next-auth";

export default async function UserPage() {
  const session = await getServerSession(options);

  if (!session) {
    return <SignInButton />;
    // redirect("/api/auth/signin?callbackUrl=/signin");
  } else {
  }
  return <Public />;
}
