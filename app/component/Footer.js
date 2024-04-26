import { SlSocialYoutube } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
export const Footer =()=>{
    return(
        <>
         <div className="flex text-base mt-11 md:mt-0 md:text-xl bg-om w-full h-10 text-slate-400 font-mono items-center relative justify-center mb-24 md:mb-0">
             <h1 className="mr-2">PRADHAN PATSHALA|</h1>
             <h2 className="mr-2">COMPUTER PROSHIKHON KENDRA NAZAT|</h2>
             <h2>THIS IS A BRANCH OF NCSM (NATIONAL COMPUTER SAKSHARTA MISSION)</h2>
         </div>
         
         <div className="flex">
         <div className="flex-col text-white text-2xl font-mono px-10 md:px-44">
             <div className="flex mb-3">
             <CiFacebook className="mr-3" /><h1 className="text-xl">PRADHAN PATSHALA</h1>
             </div>
             <div className="flex">
             <SlSocialYoutube className="mr-3" /><h1 className="text-xl">PRADHAN PATSHALA</h1>
             </div>
         </div>
         <div className="flex-col text-white text-2xl font-mono px-10 md:px-44">
         <div className="flex mb-3">
             <IoLogoInstagram className="mr-3" /><h1 className="text-xl">PRADHAN PATSHALA</h1>
             </div>
             <div className="flex">
             <FaXTwitter className="mr-3" /><h1 className="text-xl">PRADHAN PATSHALA</h1>
             </div>
         </div>
         </div>
        </>
    );
}