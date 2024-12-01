"use client"
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export const Navber =()=>{


    return(
        <>
          <nav className="h-[8vh] justify-between sm:h-[9vh] sm:px-6 w-full relative">
            <div>
              <Image alt="icon" src="/icon.png" height={30} width={30} className="h-[5vh] absolute rounded-full mt-2 sm:mt-[5.5px] bg-white/20 sm:h-[7vh] sm:w-[7vh] w-[5vh]"></Image>
            </div>
             <ul className="mt-[16px] text-[0.6rem] sm:absolute right-4 sm:text-sm flex sm:right-12 top-0 z-20">
                <li className="mr-3 cursor-pointer"><Link href="/">HOME</Link></li>
             </ul>
          </nav>
        </>
    );
}