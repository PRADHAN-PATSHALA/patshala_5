"use client"

import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';


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
      if (!name || !fatherName || !address || !cast ||!EQ || !gender|| !courseName || !DOB || !phoneNo) {
          return <p className="text-lg absolute top-[50vh] text-red-600">please fill the information</p>
      }
      const res = await fetch('https://pradhanpathshala.netlify.app/api/create', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name,fatherName,address,cast,EQ,gender,courseName,DOB,phoneNo })
      });
      if (!res.ok) {
        throw new Error("Failed to create student data");
      }
    } catch (error) {
      console.error(error);
    }
    setName("");
    setFatherName("");
    setAddress("");
    setCast("");
    setCourseName("");
    setDOB("");
    setGender("");
    setEQ("");
    setPhoneNO("");
    toast.success('Student created sucessfuly !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  return (
    <>
      <div className="h-screen w-full text-[#111] shadow-[0_40px_80px_-15px_cyan] relative bg-[#111] px-12">
      <ToastContainer />
        <form onSubmit={submit}>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Name: <input placeholder="Type the student name" className="font-sans font-light text-md text-white w-[70vh] bg-[#111]  rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="name" onChange={(e) => { setName(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Father's name: <input placeholder="Type the student father's name" className="font-sans font-light text-md text-white w-[70vh] bg-[#111]  rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="father" onChange={(e) => { setFatherName(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Address: <input placeholder="Type the student address" className="font-sans font-light text-md text-white bg-[#111] w-[70vh] rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="address" onChange={(e) => { setAddress(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Cast: <input placeholder="Type the student cast" className="font-sans font-light text-md text-white bg-[#111] w-[70vh] rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="cast" onChange={(e) => { setCast(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Educatinal Qulification: <input placeholder="Type the student educational qulification" className="font-sans font-light text-md text-white bg-[#111] w-[70vh] rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="EQ" onChange={(e) => { setEQ(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Gender: <input placeholder="Type the student gender" className="font-sans font-light text-md text-white bg-[#111] w-[70vh] rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="gender" onChange={(e) => { setGender(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Course name: <input placeholder="Type the student course name" className="font-sans font-light text-md text-white bg-[#111] w-[70vh] rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="courseName" onChange={(e) => { setCourseName(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Date of birth: <input placeholder="Type the student date of birth" className="font-sans font-light text-md text-white bg-[#111] w-[70vh] rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="DOB" onChange={(e) => { setDOB(e.target.value) }} /></label>
          <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Phone no.: <input placeholder="Type the student phone number" className="font-sans font-light text-md text-white bg-[#111] w-[70vh] rounded-lg -translate-x-[50%] left-[50%] absolute" type="text" name="phoneNo" onChange={(e) => { setPhoneNO(e.target.value) }} /></label>
          <input className="px-8 py-2 bg-cyan-400 text-white -translate-x-[50%] left-[50%] absolute top-[90vh] rounded-full cursor-pointer" type="submit" />
        </form>
      </div>
    </>
  )

}
export default Student;
