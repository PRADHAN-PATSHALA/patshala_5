import Link from "next/link";

export const LandPage = () => {
    return (
        <>
        <div className="absolute h-full w-full top-0 text-center">
                <h1 className="mt-24 font-extrabold text-lol text-6xl md:text-8xl hover:text-white cursor-default font-serif">"PRADHAN PATSHALA"</h1>
                <p className="md:text-sm text-xl text-white font-serif cursor-default">PRADHAN COACHING CENTER</p>
                <p className="text-white hover:text-pop text-xl font-serif cursor-default mt-14">Pradhan Patshala stands as a beacon of <span className="text-pop hover:text-white">knowledge and technological</span> empowerment in the community.</p>
                <p className="text-white hover:text-pop text-xl font-serif cursor-default mt-3">This center plays a pivotal role in bridging the gap between <span className="text-pop hover:text-white">technologi and individuals</span> eager to enhance their intelygency. </p>
                <div className="flex items-center justify-center">
                    <Link className="px-3 cursor-pointer py-3 bg-cyan-500 text-white rounded-lg shadow-sm mt-28 mr-5 hover:text-slate-900 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md duration-300 transition ease-in-out delay-150 font-serif" href="/contact">Join Us Now</Link>
                    <Link className="px-3 cursor-pointer py-3 bg-sonu text-slate-400 rounded-lg shadow-sm mt-28 hover:bg-slate-200 hover:text-sonu hover:-translate-y-1 hover:shadow-md duration-300 transition ease-in-out delay-150 font-serif" href="/cources">Explore More</Link>
                </div>
                </div>
        </>
    );
}