"use client"
import { SpeedInsights } from "@vercel/speed-insights/next"
import '../styles/globals.css'
import { Navber } from '@/app/component/Navber'
import { Footer } from '@/app/component/Footer'
import gsap from 'gsap'
import Mouse from './component/Mouse'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <title>PRADHAN PATSHALA</title>
       
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4713305834278197"
     crossorigin="anonymous"></script>

      </head>
      <body className='bg-om' onMouseMove={(dest)=>{
               const mouse = document.getElementById("cursor");
               const posx = dest.clientX
               const posy = dest.clientY
               gsap.to(mouse, {
                   x: posx,
                   y: posy,
               })
            }}>
              <SpeedInsights/>
               <Mouse />
      <Navber />
        {children}
      <Footer />




      
        </body>
    </html>
  )
}
