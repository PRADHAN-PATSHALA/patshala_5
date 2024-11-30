"use client"

import { error } from "logrocket";
import { useState } from "react"

const Student = () => {

  const [name, setName] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [address, setAddress] = useState("")
  const [cast, setCast] = useState("")
  const [EQ, setEQ] = useState("")
  const [gender, setGender] = useState("")
  const [courseName, setCourseName] = useState("")
  const [DOB, setDOB] = useState("")
  const [phoneNo, setPhoneNO] = useState("")

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://pradhanpatshalanazat0.netlify.app/api/create', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name,fatherName,address,cast,EQ,gender,courseName,DOB,phoneNo })
      });
      if (!res.ok) {
        throw new Error("Failed to create student data");
      } else {
        console.log(res)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="h-screen w-full text-[#111] shadow-[0_40px_80px_-15px_cyan] relative bg-[#111]">
        <form onSubmit={submit}>
          <input placeholder="Type the student name" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[40vh]" type="text" name="name" onChange={(e) => { setName(e.target.value) }} />
          <input placeholder="Type the student father's name" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[45vh]" type="text" name="father" onChange={(e) => { setFatherName(e.target.value) }} />
          <input placeholder="Type the student address" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[50vh]" type="text" name="address" onChange={(e) => { setAddress(e.target.value) }} />
          <input placeholder="Type the student cast" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[55vh]" type="text" name="cast" onChange={(e) => { setCast(e.target.value) }} />
          <input placeholder="Type the student educational qulification" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[60vh]" type="text" name="EQ" onChange={(e) => { setEQ(e.target.value) }} />
          <input placeholder="Type the student gender" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[65vh]" type="text" name="gender" onChange={(e) => { setGender(e.target.value) }} />
          <input placeholder="Type the student course name" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[70vh]" type="text" name="courseName" onChange={(e) => { setCourseName(e.target.value) }} />
          <input placeholder="Type the student date of birth" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[75vh]" type="text" name="DOB" onChange={(e) => { setDOB(e.target.value) }} />
          <input placeholder="Type the student phone number" className="text-[#111] border-black border-solid border-[.3vh] rounded-lg -translate-x-[50%] left-[50%] absolute top-[80vh]" type="text" name="phoneNo" onChange={(e) => { setPhoneNO(e.target.value) }} />
          <input className="px-8 py-2 bg-cyan-400 text-white -translate-x-[50%] left-[50%] absolute top-[85vh] rounded-full" type="submit" />
        </form>
      </div>
    </>
  )

}
export default Student;
