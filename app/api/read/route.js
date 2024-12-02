import { db } from "@/app/appwrite";
import { NextResponse } from "next/server";


const listStudent = async () => {
    try {
        const response = await db.listDocuments(
            process.env.DB_ID,
            process.env.CO_ID,
            [{name , fatherName , courseName}]
        );
        const list = response.documents.map((e =>{
            name: name;
            father: fatherName;
            course: courseName;
        }));
        return list;
    } catch (error) {
        console.log(error);
    }
}

export const GET = async () =>{
    try {
        const res = await listStudent();
        return NextResponse.json({res})
    } catch (error) {
        console.error(error)
    }

}