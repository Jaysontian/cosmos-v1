import { db } from "../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

// Ccomponents
import SpotifyButton from "@/app/signin/apps/spotifybutton";

async function getData(pathname: string) {
  const session = await getServerSession(options);
  console.log(session);

  // retrieve user's public facing data
  const docRef = doc(db, "users", pathname);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) throw new Error("failed");
  console.log("Success:", docSnap.data());
  return docSnap.data();
}

export default function Public(props: { username: string }) {
  const data = getData(props.username);

  return (
    <div>
      <h1>Edit: {data.name}</h1>
      <p>Edit: {data.bio}</p>
      <p>Spotify Data:</p>
      <SpotifyButton />
    </div>
  );
}
