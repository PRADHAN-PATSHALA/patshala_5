import Link from "next/link";

export const LandPage = () => {
    return (
        <>
        <div className="absolute h-full w-full top-[18vh] sm:top-0 text-center">
                <h1 className="mt-24 font-extrabold text-lol text-xl sm:text-8xl tracking-wider hover:text-white cursor-default font-serif">"PRADHAN PATSHALA"</h1>
                <p className="sm:text-sm mt-4 text-[0.6rem] tracking-[1.2vh] text-slate-200/90 font-serif cursor-default">PRADHAN COACHING CENTER</p>
                <div className="flex items-center font-mono justify-center">
                    <Link className="px-3 cursor-pointer py-3 bg-cyan-500 text-white rounded-lg shadow-sm mt-28 mr-5 hover:text-slate-900 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md duration-300 transition ease-in-out delay-150 font-serif" href="/dashbord">Join Us Now</Link>
                    <Link className="px-3 cursor-pointer py-3 bg-sonu text-slate-400 rounded-lg shadow-sm mt-28 hover:bg-slate-200 hover:text-sonu hover:-translate-y-1 hover:shadow-md duration-300 transition ease-in-out delay-150 font-serif" href="/cources">Explore More</Link>
                </div>
                </div>
        </>
    );
}