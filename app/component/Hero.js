import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="h-full w-full relative text-xl bg-green-700 text-white">
        <h1 className="font-serif font-light absolute top-[40vh] -translate-x-[50%] left-[50%]">Pradhan Pathshala</h1>
        <p className="font-sans tracking-[.5vh] absolute top-[50vh] text-sm right-[3vh] text-yellow-300">PRADHAN <br />COACHING <br />CENTER</p>
        <Link href={"/about"} className="px-8 py-1 bg-white text-black rounded-full absolute top-[80vh] -translate-x-[50%] left-[50%]">Know more</Link>
      </div>
    </>
  )
}

export default Hero;
