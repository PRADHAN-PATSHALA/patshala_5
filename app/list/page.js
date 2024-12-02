"use client"
import React, { useState } from 'react'




const List = () => {


  const [details, setDetails] = useState()


  const st = async () =>{
    try {
      const res = await fetch('https://pradhanpathshala.netlify.app/api/read', {
        method: "GET",
      });
      const data = await res.json();
      setDetails(data);
      if (!res.ok) {
        throw new Error("Failed to create student data");
      }
    } catch (error) {
      console.error(error);
    }
  }

  st()

  return (
    <>
      <div className='h-full w-full px-20'>
        <div className='min-h-screen w-full bg-white'>
          <div className='flex gap-10 justify-center text-xl text-bold underline'>
            <h1>Student Name</h1>
            <h1>Father's Name</h1>
            <h1>Course Name</h1>
          </div>
          {details.map((e)=>{
            return (
              <div className='h-[5vh] w-full flex gap-10 relative top-6 left-[55vh]'>
            <p>{e.name}</p>
            <p>{e.fatherName}</p>
            <p>{e.courseName}</p>
          </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default List
