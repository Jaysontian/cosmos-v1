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

  // If user does not exist throw 404 error
  await getDoc(doc(db, "users", username)).then((doc) => {
    if (!doc.exists()) notFound();
  });

  // useSession to grab logged in user ID then check if this is their page
  const session = await getServerSession(options);
  if (!session) return <Public />;
  const docRef = doc(db, "authID", session?.user.id);
  const docSnap = await getDoc(docRef);

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
