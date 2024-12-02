"use client"
import gsap from 'gsap';
import Big from './component/Big';




const Main = () => {


  return (
    <>
      <main className='h-full w-full' onMouseMove={(e) => {
        const move = document.querySelector("#mouse")
        const x = e.clientX;
        const y = e.clientY
        gsap.to(move, {
          x: x,
          y: y,
          ease: "none"
        })
      }}>
        <Big />
      </main>
    </>
  );
};

export default Main;