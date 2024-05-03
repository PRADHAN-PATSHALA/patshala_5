"use client"
import React from 'react'
import gsap from 'gsap'


const Cource = () => {

 const play1 = () => {
    const d1 = document.getElementById('d1');
    gsap.to(d1, {
        y: -50,
        duration: 2,
        yoyo: true,
    });
 }

 const pause1 = () => {
    const d1 = document.getElementById('d1');
    gsap.to(d1, {
        y: 0,
        duration: 2,
        yoyo: true,
        delay: 5
    });
 }
 
 const play2 = () => {
    const d2 = document.getElementById('d2');
    gsap.to(d2, {
        y: -50,
        duration: 2,
        yoyo: true,
    });
 }

 const pause2 = () => {
    const d2 = document.getElementById('d2');
    gsap.to(d2, {
        y: 0,
        duration: 2,
        yoyo: true,
        delay: 5
    });
 }
 

 const play3 = () => {
    const d3 = document.getElementById('d3');
    gsap.to(d3, {
        y: -50,
        duration: 2,
        yoyo: true,
    });
 }

 const pause3 = () => {

    const d3 = document.getElementById('d3');
    gsap.to(d3, {
        y: 0,
        duration: 2,
        yoyo: true,
        delay: 5
    });
 }


  return (
    <div className='gap-28 h-screen w-full bg-[#170B1C] sm:flex justify-center items-center'>
      <div id='d1' onMouseEnter={play1} onMouseLeave={pause1} className='sm:-rotate-12 rotate-0 text-white  text-3xl relative sm:top-[0] top-[12vh] bg-blue-700 py-10 h-[10vh] w-full sm:h-[60vh] sm:w-[40vh] text-center rounded-[10vh]'>
        <h1 id='t1' className='flex justify-center items-center relative -top-5'>DOAM</h1>
        <p className='hidden sm:block mt-4 text-2xl text-white/80'>Diploma in office Application and Management</p>
        <p className='hidden sm:block text-center text-white/80 text-2xl mt-4 bg-white/20 rounded-3xl'>Duration- 1 Year</p>
        <p className='hidden sm:block text-center text-white/80 text-2xl mt-4'>Coulification- 10th Pass</p>
      </div>
      <div id='d2' onMouseEnter={play2} onMouseLeave={pause2} className='sm:rotate-6 rotate-0 text-white text-3xl relative sm:mt-[0] sm:top-[0] mt-6 top-[12vh] bg-red-700 py-10 text-w h-[10vh] w-full sm:h-[60vh] sm:w-[40vh] text-center rounded-[10vh]'>
        <h1 id='t2' className='flex justify-center items-center relative -top-5'>CWD</h1>
        <p className='hidden sm:block mt-4 text-2xl text-white/80'>Certificate in Web Desining</p>
        <p className='hidden sm:block text-center text-white/80 text-2xl mt-4 bg-white/20 rounded-3xl'>Duration- 6 Month</p>
        <p className='hidden sm:block text-center text-white/80 text-2xl mt-4'>Coulification- Knowledge of DTP</p>
      </div>
      <div id='d3' onMouseEnter={play3} onMouseLeave={pause3} className='sm:-rotate-12 rotate-0 text-white text-3xl relative sm:mt-0 sm:top-[0] mt-6 top-[12vh] bg-green-700 py-10 h-[10vh] w-full sm:h-[60vh] sm:w-[40vh] text-center rounded-[10vh]'>
        <h1 id='t3' className='flex justify-center items-center relative -top-5'>Junior IT</h1>
        <p className='hidden sm:block mt-4 text-2xl text-white/80'>For Kids</p>
        <p className='hidden sm:block text-center text-white/80 text-2xl mt-600vh] bg-white/20 rounded-3xl'>Duration- 1 Year</p>
        
      </div>
      <div id='d4' className='sm:-rotate-12 sm:hidden block rotate-0 text-white text-3xl relative sm:mt-0 sm:top-[0] mt-6 top-[12vh] bg-yellow-700 py-10 h-[10vh] w-full sm:h-[60vh] sm:w-[40vh] text-center rounded-[10vh]'>
      <h1 id='t4' className='flex justify-center items-center relative -top-5'>CCA</h1>
      </div>
      
    </div>
  );
}

export default Cource;
