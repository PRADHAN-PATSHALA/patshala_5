"use client"

import React, { useEffect, useState } from 'react';
import {ID, account} from "../appwrite"
import Dash from '../component/Dash';



const SignUp = () => {

  
  
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [User, setUser] = useState(null);
  const [Screen, setScreen] = useState('log');

  
  useEffect(()=>{
    const Auser = async () => {
        setUser(await account.get());
    };
    Auser();
}, []);



const Login = async (e) => {
    e.preventDefault();
    try {
        await account.createEmailPasswordSession(Email, Password);
        setUser(await account.get());
        setEmail("");
        setPassword("");
    } catch (error) {
        return <p className='text-red-600'>{error}</p>
    }
}




const Register = async (e) => {
    e.preventDefault();
    try {
      await account.create(ID.unique(), Email, Password, Name);
      await Register();
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      return <p className='text-red-600'>{error}</p>
    };
  } 

const logScreen = () => {
  setScreen('log');
}

const resScreen = () => {
  setScreen(null);
}

if (User) {
  return (
      <Dash />
  )
}

if (Screen == 'log') {
  return (
    <>
     <div className='h-screen w-full'>
     <form onSubmit={Login} className='h-[40vh] ml-[48vh] relative top-[20vh] w-[120vh] bg-white/20 text-slate-100 rounded'>
      <label htmlFor="email" className='ml-[25vh]'>Email/PhoneNumber:   <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} id='email' name='email' type='email' placeholder='Enter your Email' className=' mt-[5vh] w-[36%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>

      <label htmlFor="password" className='ml-[25vh]'>Password:   <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} id='password' name='passwod'  type='password' placeholder='Enter a Passwod' className=' mt-[5vh] w-[47%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
      <div className='text-center'>
      <button type='submit' className='bg-om px-[31vh] py-1 -ml-3 mt-[5vh] text-slate-200 border-none rounded-[20vh]'>Login</button>
      </div>
      <div className='ml-[25vh] flex text-white'>
              <p className='-tracking-tighter font-mono'>If you don't have any account, <button onClick={resScreen} type='submit' className='text-blue-500 border-none mt-[8.5px]' >Register</button> now </p>
      </div>
    </form>
     </div>
    </>
  )
}

if (Screen === null) {
  return (
    <>
      <div className='h-[150vh] w-full'>
      <form onSubmit={Register} className='h-[80vh] ml-[48vh] relative top-[18vh] w-[120vh] bg-white/20 text-slate-100 rounded'>
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
          
          <label htmlFor="password" className='ml-[25vh]'>Password:   <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} id='password' name='passwod'  type='password' placeholder='Enter a Passwod' className=' mt-[5vh] w-[47%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
         
          <div className='text-center'>
          <button type='submit' className='bg-om px-[30vh] py-1 -ml-3 mt-[5vh] text-slate-200 border-none rounded-[20vh]'>Register</button>
          </div>
          <div className='ml-[25vh] flex text-white'>
              <p className='-tracking-tighter font-mono'>If you have already registered, <button onClick={logScreen} type='submit' className='text-blue-500 border-none mt-[8.5px] ml-[4.7px]' >Login</button> now </p>
          </div>
        </form>
      </div>   
    </>
  )
}

if (User === null) {
    return (
      <>
      <div className='h-screen w-full'>
      <form onSubmit={Login} className='h-[40vh] ml-[48vh] mt-[20vh] w-[120vh] bg-white/20 text-slate-100 rounded'>
       <label htmlFor="email" className='ml-[25vh]'>Email/PhoneNumber:   <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} id='email' name='email' type='email' placeholder='Enter your Email' className=' mt-[5vh] w-[36%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
 
       <label htmlFor="password" className='ml-[25vh]'>Password:   <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} id='password' name='passwod'  type='password' placeholder='Enter a Passwod' className=' mt-[5vh] w-[47%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
       <div className='text-center'>
       <button type='submit' className='bg-om px-[31vh] py-1 -ml-3 mt-[5vh] text-slate-200 border-none rounded-[20vh]'>Login</button>
       </div>
       <div className='ml-[25vh] flex text-white'>
               <p className='-tracking-tighter font-mono'>If you have already registered, <button onClick={resScreen} type='submit' className='text-blue-500 border-none mt-[8.5px] ml-[4.7px]' >Login</button> now </p>
       </div>
     </form>
      </div>
     </>
    )
}

}

export default SignUp;
