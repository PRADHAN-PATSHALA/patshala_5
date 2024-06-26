import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

export const LandPage = () => {
    return (
        <>
        <div className="absolute h-full w-full -top-[35vh] sm:top-0 text-center">
                <h1 className="mt-[60vh] sm:mt-24 font-extrabold text-white text-xl sm:text-8xl tracking-wider hover:text-white cursor-default font-serif">"PRADHAN PATSHALA"</h1>
                <p className="mt-[3vh] sm:text-sm text-[0.6rem] tracking-[1.2vh] text-slate-200/90 font-serif cursor-default">PRADHAN COACHING CENTER</p>
                <div className="flex items-center justify-center">
                    <Link className="px-6 sm:px-16 cursor-pointer py-3 bg-new2 text-white rounded-3xl hover:rounded-lg shadow-sm mt-28 mr-5 hover:text-black hover:-translate-y-1 hover:bg-white/80 font-sans tracking-normal hover:shadow-md duration-300 transition ease-in-out delay-150" href="/contact">Join Us Now</Link>
                    <Link className="px-6 sm:px-3 flex cursor-pointer py-3 bg-white/20 text-white rounded-3xl hover:rounded-lg shadow-sm mt-28 hover:bg-white/70 hover:text-black hover:-translate-y-1 hover:shadow-md duration-300 transition ease-in-out delay-150 font-serif" href="#cource">Explore More <BsArrowUpRightCircle className="ml-1 text-xl" /></Link>
                </div>
                </div>
        </>
    );
}