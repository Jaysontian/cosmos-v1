import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { db } from "../../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

/* Return data of current logged in user */


export async function GET() {

    const session = await getServerSession(options);

    if (!session) console.log("There is no session");

    const ID_doc = await getDoc(doc(db, "authID", session?.user.id));
    
    const uid = ID_doc.data().username;


    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error("failed");
    return Response.json(docSnap.data());
}
