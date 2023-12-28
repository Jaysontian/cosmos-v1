import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { db } from "../../../firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

/* Provider of library items: GET POST FETCH */

const session = await getServerSession(options);
if (!session) { return Response.json({error:'Session not found. Access not granted.' }, { status: 401 })};

export async function GET() {
    const docSnap = await getDoc(doc(db, "users", session?.user.username));
    return Response.json(docSnap.data().lib);
}

export async function POST(request){
    const {type, metadata} = await request.json();
    if (!type || !metadata) return NextResponse.json({ "message": "Missing required data" });

    console.log("Server received: ", type, metadata);


    return NextResponse.json(newTodo);
}