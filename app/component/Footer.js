import Link from "next/link";


const Footer = () => {
  return (
    <>
      <div className="h-[50vh] w-full bg-cyan-950 text-lg sm:text-xl text-white">
        <div className="ml-4">
        <h1>NCSM
        National computer Saksharta Mission</h1>
        <p className="text-lg">Pradhan Pathshala| Pradhan Coaching Center is a part of NCSM</p>
        <Link href={"more:www.ncsm.co.in"}>Know more about NCSM</Link>
        <h1>Get in <span className="text-cyan-400">touch</span></h1>
        <Link href={"tel:+919832290873"}>+919832290873</Link>
        <p>Address: Nazat - Khadipratisthan para(Bypas para) - near BDO office </p>
        <Link className="text-sm hidden lg:flex relative lg:-bottom-[13vh] lg:left-[180vh]" href={"/student"}>Created by Merge</Link>
        </div>
      </div>
    </>
  )
}

export default Footer;
