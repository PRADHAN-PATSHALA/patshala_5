"use client"

import { useState } from "react"



const login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState();

    const handler = (e) => {
      e.preventDefault();
        if (name=="Tanmay Pradhan" || password==993342) {
            window.location.assign("/student");
        } else {
            return (<p className="text-white text-lg">You are not the Admin</p>)
        }
        setName("");
        setPassword();
    }



  return (
    <>
      <form onSubmit={handler} className="min-h-screen w-full bg-black">
      <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Name: <input type="name" placeholder="Type the student name" className="font-sans font-light text-md text-white w-[70vh] bg-[#111]  rounded-lg -translate-x-[50%] left-[50%] absolute" onChange={(e) => { setName(e.target.value) }} /></label>
      <label className="relative text-white border-cyan-200 border-solid border-[.5px] mb-3 rounded-lg h-10 w-full items-center top-[10vh] flex text-lg font-serif font-semibold">Password: <input type="password" placeholder="Type the student father's name" className="font-sans font-light text-md text-white w-[70vh] bg-[#111]  rounded-lg -translate-x-[50%] left-[50%] absolute" onChange={(e) => { setPassword(e.target.value) }} /></label>
      <input className="px-8 py-2 bg-cyan-400 text-white -translate-x-[50%] left-[50%] absolute top-[40vh] rounded-full cursor-pointer" type="submit" />
      </form>
    </>
  )
}

export default login;
