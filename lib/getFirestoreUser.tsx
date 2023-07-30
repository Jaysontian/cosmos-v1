import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export default async function getFirestoreUser(uid: string) {
  console.log("UID: " + `${uid}`);
  const docRef = doc(db, "users", `${uid}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    throw new Error("failed");
  }

  //   var data = {};
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const docRef = doc(db, "users", userId);
  //         const docSnap = await getDoc(docRef);
  //         if (docSnap.exists()) {
  //           console.log(docSnap.data());
  //           data = docSnap.data();
  //         } else {
  //           console.log("ERROR DATA!");
  //         }
  //       } catch (err) {}
  //     }
  //     fetchData();
  //   }, []);

  return { docSnap };
}
