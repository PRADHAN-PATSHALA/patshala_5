import Link from "next/link";

export const Error=()=>{
  return (
    <>
        <h1 className="mt-24 font-extrabold text-lol text-6xl md:text-8xl hover:text-white cursor-default font-serif">"PRADHAN PATSHALA"</h1>
        <div className="flex-col">
        <p className="mt-12 mb-6 text-bold text-white text-2xl">This Page is not available</p>
        <Link className="px-3 cursor-pointer py-3 bg-cyan-500 text-white rounded-lg shadow-sm mt-28 mr-5 hover:text-slate-900 hover:-translate-y-1 hover:bg-slate-200 hover:shadow-md duration-300 transition ease-in-out delay-150 font-serif" href="/">GO TO HOME PAGE</Link>
        </div>
    </>
  );
}
