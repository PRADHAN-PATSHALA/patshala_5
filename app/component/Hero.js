import Link from "next/link";


const Hero = () => {
  return (
    <>
      <div id="hero" className="h-full w-full overflow-hidden relative text-lg sm:text-8xl">
        <div className="min-h-screen w-full">
        <div className="h-[30vh] w-[30vh] shadow-[0_40px_80px_-15px_cyan] bg-cyan-400 absolute -left-[10vh] -top-[10vh] rounded-full z-[-1]"></div>
        <h1 className="font-serif font-light absolute top-[40vh] -translate-x-[50%] left-[50%]">Pradhan Pathshala</h1>
        <p className="font-sans tracking-[.5vh] absolute top-[50vh] text-sm sm:right-[30vh] right-[3vh] text-cyan-800">PRADHAN <br />COACHING <br />CENTER</p>
        <Link href={"/#courses"} className="px-8 sm:px-8 sm:py-3 sm:text-[6vh] py-1 bg-cyan-500 text-white rounded-full absolute sm:top-[80vh] top-[70vh] -translate-x-[50%] left-[50%]">Know more</Link>
        <div className="h-[30vh] w-[30vh] shadow-[0_40px_80px_15px_cyan] bg-cyan-400 absolute -right-[10vh] -bottom-[10vh] rounded-full z-[-1]"></div>
        </div>
      </div>
    </>
  )
}

export default Hero;
