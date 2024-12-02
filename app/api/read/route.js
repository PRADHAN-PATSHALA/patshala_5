import { db } from "@/app/appwrite";
import { NextResponse } from "next/server";


export const listStudent = async () => {
    try {
        const response = await db.listDocuments(
            process.env.DB_ID,
            process.env.CO_ID,
        )
        const list = response.documents.map((doc)=>{
            name: doc.$name;
            father: doc.$fatherName;
            course: doc.$courseName;
        })
        NextResponse(list)
    } catch (error) {
        console.log(error);
    }
}

