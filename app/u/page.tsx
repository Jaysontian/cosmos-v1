import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firestore";

import { useCollection } from "react-firebase-hooks/firestore";

export default function users() {
  return (
    <>
      <div className="h-full">Users</div>
    </>
  );
}
