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
        <div className="flex flex-col align-left w-auto left items-start pl-24 pt-24">
          <h1 className="text-3xl font-medium pb-20">
            Welcome, {session.user.name}. {session.user.id}
          </h1>
          <h2 className="pb-5">Claim your nebulo link below</h2>
          <div className="flex flex-row content-center color-black">
            <p className="claim self-center m-0">nebulo.me/</p>
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
              className="h-10 text-3xl self-center bg-transparent text-white rounded border-opacity-25 border-solid border-gray-50 border-2 px-4 py-6"
            ></input>
            <button
              className="rounded self-center bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-10 mx-4 text-xl"
              onClick={async () => {
                await submitlink(session, value);
                router.push(`/u/${value}`);
              }}
            >
              -{`>`}
            </button>
          </div>
        </div>
      </>
    );
  }
}
