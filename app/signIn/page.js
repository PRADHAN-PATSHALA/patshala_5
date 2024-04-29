import React from 'react'

const SignIn = () => {
  return (
    <>
      <form className='h-[80vh] ml-[48vh] w-[120vh] bg-white/20 text-slate-100 rounded'>
        <h1 className='text-4xl text-center'>SignIn Now</h1>
        <label className='ml-[25vh]'>Name:   <input type='text' placeholder='Enter your Name' className=' mt-[8vh] w-[50%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
        <label className='ml-[25vh]'>Father Name:   <input type='text' placeholder="Enter your Father's Name" className='w-[44%] mt-[5vh] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' />
</label>
        <select className='w-[57%] px-2 bg-om rounded-[2vh] ml-[25vh] mt-[5vh] border-solid border-1 border-slate-300 text-slate-200s' >
          <option>Select Cource, you learning</option>
          <option>Doam</option>
          <option>Select </option>
          <option>Select</option>
        </select>
        <label className='ml-[25vh]'>Email/PhoneNumber:   <input type='email' placeholder='Enter your Email' className=' mt-[5vh] w-[36%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
        <label className='ml-[25vh]'>Password:   <input type='password' placeholder='Enter a Passwod' className=' mt-[5vh] w-[47%] px-2 bg-om rounded-[2vh] border-solid border-1 border-slate-300 text-slate-200s' /></label>
        <div className='text-center'>
        <input type='submit' className='bg-om px-[30vh] py-1 -ml-3 mt-[5vh] text-slate-200 border-none rounded-[20vh]' />
        </div>
      </form>
    </>
  )
}

export default SignIn
