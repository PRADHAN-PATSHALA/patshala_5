"use client"
import '../styles/globals.css'
import { Navber } from "./component/Navber"

import gsap from 'gsap'




export default function RootLayout({ children }) {



  return (
    
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>PRADHAN PATSHALA</title>
       
      

      </head>
      <body className='bg-gray-200 text-[#111] w-full h-full overflow-x-hidden overflow-y-auto'>
               
      <Navber />
        {children}
      




      
        </body>
    </html>
  
  )
}
