"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { db } from "@/firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

async function submitlink(session: any, val: string) {
  await setDoc(doc(db, "authID", session.user.id), {
    username: val,
  });
  await setDoc(doc(db, "users", val), {
    name: session.user.name,
    bio: "Edit your bio here",
    lib: []
  });
  return;
}

export default function onboard() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        <div>Welcome, {session.user.name}</div>
        <code>{session.user.id}</code>
        <div className="spacer"></div>
        <div className="mb-5">Claim your personal link</div>
        <div className="flex">
          <div>
            <p className="gradient m-0 font-semibold text-3xl">nebulo.me/</p>
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            className="font-medium text-xl"
          ></input>
        </div>
        <button
          onClick={async () => {
            await submitlink(session, value);
            router.push(`/u/${value}`);
          }}
        >
          Claim
        </button>
      </>
    );
  }
}
