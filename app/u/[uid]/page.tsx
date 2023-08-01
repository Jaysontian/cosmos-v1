import { db } from "../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import Public from "./public";
import { headers } from "next/headers";

import SignOutButton from "@/app/signin/signOutButton";

// Session + Auth
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function UserPage() {
  // Getting URL Input for username
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const username = pathname.slice(3);
  await getDoc(doc(db, "users", username)).then((doc) => {
    if (!doc.exists()) {
      console.log("NO EXIST");
      notFound();
    }
  });

  // Getting Auth
  const session = await getServerSession(options);
  if (!session) return <Public />;
  const docRef = doc(db, "authID", session?.user.id);
  const docSnap = await getDoc(docRef).catch(() => {
    notFound();
  });

  if (docSnap.exists() && username == docSnap.data().username) {
    return (
      <>
        <div>You are editing your own page.</div>
        <SignOutButton />
        <Public />
      </>
    );
  } else {
    return <Public />;
  }
}
