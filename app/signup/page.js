"use client"

import React, { useState } from 'react';
import { account, ID } from '../appwrite';



const SignUp = () => {



  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Passwod, setPassword] = useState("");
  

  const Register = async (e) => {
    e.preventDefault();
    try {
      account.create(ID.unique(), Email, Passwod, Name);
      Register();
    } catch (error) {
      throw error
    };

    setEmail("");
    setName("");
    setPassword("");


  };
  



  return (


    <>

    
      <form onSubmit={Register} className='h-[80vh] ml-[48vh] w-[120vh] bg-white/20 text-slate-100 rounded'>
        <h1 className='text-4xl text-center'>SignIn Now</h1>
        <label htmlFor="name" className='ml-[25vh]'>Name:   <input value={Name} onChange={(e)=>{setName(e.target.value)}} name='name' id='name' type='text' placeholder='Enter your Name' className=' mt-[8vh] w-[50%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
        
        <label htmlFor="name" className='ml-[25vh]'>Father Name:   <input id='father' name='father' type='text' placeholder="Enter your Father's Name" className='w-[44%] mt-[5vh] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' />
</label>
        
        <select id='cource' name='cource' className='w-[57%] px-2 bg-om rounded-[2vh] ml-[25vh] mt-[5vh] border-solid border-1 border-slate-300 text-slate-200s' >
          <option>Select Cource, you learning</option>
          <option>Doam</option>
          <option>Junior-IT</option>
          <option>CWD</option>
          <option>DIT</option>
          <option>CCA</option>
        </select>
       
        <label htmlFor="email" className='ml-[25vh]'>Email/PhoneNumber:   <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} id='email' name='email' type='email' placeholder='Enter your Email' className=' mt-[5vh] w-[36%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
        
        <label htmlFor="passwod" className='ml-[25vh]'>Password:   <input value={Passwod} onChange={(e)=>{setPassword(e.target.value)}} id='password' name='passwod'  type='password' placeholder='Enter a Passwod' className=' mt-[5vh] w-[47%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
       
        <div className='text-center'>
        <input type='submit' className='bg-om px-[30vh] py-1 -ml-3 mt-[5vh] text-slate-200 border-none rounded-[20vh]' />
        </div>
      </form>
    </>
  )
}

export default SignUp;
