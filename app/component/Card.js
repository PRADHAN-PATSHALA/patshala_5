import gsap from "gsap";
import Image from "next/image"
import { MdAccessTime } from "react-icons/md";


const Card = () => {

  const courses = [
    {
      name: "Junior IT",
      img: "/theam.jpg",
      time: "12"
    },
    {
      name: "DOAM",
      img: "/icon.png",
      time: "12"
    },
    {
      name: "ADOAP",
      img: "/icon.png",
      time: "12"
    },
    {
      name: "Computer Basic",
      img: "/icon.png",
      time: "6"
    },
    {
      name: "Web Degine",
      img: "/icon.png",
      time: "12"
    },
  ]



  return (
    <>
      <h1 className="text-3xl font-bold absolute left-[5vh] sm:left-[30vh]">Our <span className="text-cyan-400">courses</span></h1>
      {courses.map((e, i) => {
        return (
          <div key={i}>
            <div id="box" className="mt-6 h-[10vh] relative top-[10vh] sm:top-[5vh] sm:left-[70vh] w-full sm:w-[70vh] rounded-lg bg-white shadow-lg px-2 py-1">
              <div className="h-full flex">
                <h1 className="mt-2 ml-4 text-lg font-bold font-serif">{e.name}</h1>
                <div id="ability" className="flex mt-2 ml-2 absolute right-[1vh] sm:right-[4vh] sm:top-[1.5vh]">
                  <div className="bg-cyan-500 relative h-6 rounded-full text-md w-auto px-2 flex items-center justify-center font-bold font-sans">
                    <p className="relative bottom-[4px] flex items-center justify-center gap-2 text-white"><MdAccessTime /> <span className="text-white">{e.time} Month</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )




}

export default Card;
