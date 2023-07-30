import React from "react";
import { redirect } from "next/navigation";

// Authentication
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

// Database
import { db } from "@/firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

// Child Components
import Onboard from "./onboard/onboard";
import SignInButton from "./signInButton";

export default async function signin() {
  const session = await getServerSession(options);

  if (!session) {
    return <SignInButton />;
    // redirect("/api/auth/signin?callbackUrl=/signin");
  } else {
  }

  console.log(session?.user.id);
  const docRef = doc(db, "authID", session?.user.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // if the user exists, then load their page
    redirect(`/u/${docSnap.data().username}`);
    //console.log("Document data:", docSnap.data().username);
  } else {
    return (
      <>
        <Onboard />
      </>
    );
  }
}
