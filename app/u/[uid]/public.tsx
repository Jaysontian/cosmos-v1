"use client";
import { db } from "../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

async function getData(pathname: string) {
  const docRef = doc(db, "users", pathname.slice(3));
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) throw new Error("failed");
  console.log("Success:", docSnap.data());
  return docSnap.data();
}

export default function Public() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    getData(pathname).then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
