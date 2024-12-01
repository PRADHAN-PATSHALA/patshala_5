"use client"
import '../styles/globals.css'
import Footer from './component/Footer'
import Mouse from './component/Mouse'
import { Navber } from "./component/Navber"

import gsap from 'gsap'




export default function RootLayout({ children }) {



  return (
    
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>PRADHAN PATSHALA</title>
       
      

      </head>
      <body className='bg-gray-300 text-[#111] w-full h-full overflow-x-hidden overflow-y-auto'  onMouseMove={(e)=>{
      const move = document.querySelector("#mouse")
      const x = e.clientX;
      const y = e.clientY
      gsap.to(move, {
        x: x,
        y: y,
        ease: "none"
      })
    }}>
               
      <Navber />
      <Mouse />
        {children}
      <Footer />




      
        </body>
    </html>
  
  )
}
