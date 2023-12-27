import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { db } from "../../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

/* Returns data of logged in user given ID 
    returns false if not logged in
*/

export async function GET() {
    const session = await getServerSession(options);
    if (!session) {
        console.log("There is no session");
    }
    const docRef = doc(db, "authID", session?.user.id);
    const docSnap = await getDoc(docRef);
    console.log(JSON.stringify(docSnap.data()));
    return Response.json(docSnap.data());
}
