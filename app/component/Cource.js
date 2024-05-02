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
      <div id='d1' onMouseEnter={play1} onMouseLeave={pause1} className='-rotate-12 text-white  text-3xl relative sm:top-[0] left-10 top-[12vh] bg-blue-700 py-10 h-[20vh] w-[50vh] sm:h-[60vh] sm:w-[40vh] text-center rounded-[10vh]'>
        <h1 id='t1' className='justify-center items-center'>DOAM</h1>
      </div>
      <div id='d2' onMouseEnter={play2} onMouseLeave={pause2} className='rotate-6 text-white text-3xl relative sm:mt-[0] sm:top-[0] left-10 mt-6 top-[12vh] bg-red-700 py-10 text-w h-[20vh] w-[50vh] sm:h-[60vh] sm:w-[40vh] text-center rounded-[10vh]'>
        <h1 id='t2' className='justify-center items-center'>CWD</h1>
      </div>
      <div id='d3' onMouseEnter={play3} onMouseLeave={pause3} className='-rotate-12 text-white text-3xl relative sm:mt-0 sm:top-[0] left-10 mt-6 top-[12vh] bg-green-700 py-10 h-[20vh] w-[50vh] sm:h-[60vh] sm:w-[40vh] text-center rounded-[10vh]'>
        <h1 id='t3' className='justify-center items-center'>Junior IT (Kids)</h1>
      </div>
    </div>
  );
}

export default Cource;
