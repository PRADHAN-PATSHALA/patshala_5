import Link from "next/link";
import Image from "next/image";


export const Navber =()=>{
    return(
        <>
          <nav className="flex px-2 h-[8vh] sm:h-[9vh] sm:px-6 w-full text-white">
            <div>
              <Image alt="icon" src="/icon.png" height={30} width={30} className="h-[5vh] absolute rounded-full mt-2 sm:mt-[5.5px] bg-white/20 sm:h-[7vh] sm:w-[7vh] w-[5vh]"></Image>
            </div>
             <ul className="mt-[16px] text-[0.6rem] sm:text-sm absolute right-4 sm:right-12 top-0 z-20 flex">
                <li className="mr-3 cursor-pointer"><Link href="/">HOME</Link></li>
                <li className="mr-3 cursor-pointer"><Link href='/cources'>COURCES</Link></li>
                <li className="mr-3 cursor-pointer"><Link href="/about">ABOUT</Link></li>
                <li className="mr-3 cursor-pointer"><Link href="/contact">CONTACT</Link></li>
                <li className="mr-3 cursor-pointer"><Link href="/dashbord">SIGN-UP</Link></li>
             </ul>
          </nav>
        </>
    );
}