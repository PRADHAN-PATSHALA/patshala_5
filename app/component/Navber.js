import Link from "next/link";
import Image from "next/image";


export const Navber =()=>{
    return(
        <>
          <nav className="flex px-2 md:px-6 bg-om w-full text-slate-400">
            <div>
              <Image src="/icon.png" height="45" width="45"></Image>
            </div>
             <ul className="mt-3 absolute right-0 top-0 z-20 flex">
                <li className="mr-3 font-serif cursor-pointer"><Link href="/">HOME</Link></li>
                <li className="mr-3 font-serif cursor-pointer"><Link href='/cources'>COURCES</Link></li>
                <li className="mr-3 font-serif cursor-pointer"><Link href="/about">ABOUT</Link></li>
                <li className="mr-3 font-serif cursor-pointer"><Link href="/contact">CONTACT</Link></li>
                <li className="mr-3 font-serif cursor-pointer"><Link href="/signup">SIGN-UP</Link></li>
             </ul>
          </nav>
        </>
    );
}