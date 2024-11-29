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
      <body className='bg-gray-200 text-white w-full h-full overflow-hidden'>
               
      <Navber />
        {children}
      




      
        </body>
    </html>
  
  )
}
