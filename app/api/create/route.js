import { ID } from "appwrite";
import { NextResponse } from "next/server";
import { db } from "@/app/appwrite";


const createStudent = async (details) => {
    try {
        const response = await db.createDocument(
            process.env.DB_ID,
            process.env.CO_ID,
            ID.unique(),
            details
        )
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const POST = async (Request) => {
    const req = Request;
    try {
        const { name,

            fatherName,
            
            address,
            
            phoneNo,
            
            DOB,
            
            cast,
            
            EQ,
            
            gender,
            
            courseName ,
        } = await req.json();

        const details = { name,

            fatherName,
            
            address,
            
            phoneNo,
            
            DOB,
            
            cast,
            
            EQ,
            
            gender,
            
            courseName ,
        }

        const res = await createStudent(details);
        return NextResponse.json({massage:"studen added"});

    } catch (error) {
        console.error(error);
    }
}