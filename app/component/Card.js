import Image from "next/image"

const Card = () => {

  const courses = [
    {
      name: "Junior IT",
      img: "/icon.png",
      time: "12"
    },
    {
      name: "DOAM",
      img: "/icon.png",
      time: "12"
    },
    {
      name:"ADOAP",
      img:"/icon.png",
      time:"12"
    },
    {
      name:"Computer Basic",
      img:"/icon.png",
      time:"6"
    },
    {
      name:"Web Degine",
      img:"/icon.png",
      time:"12"
    },
  ]


  return (
    <>
      {courses.map((e, i) => {
        return (
            <div key={i}>
              <div className="flex mt-6 h-[20vh] relative top-[50vh] w-[50vh] rounded-lg bg-white shadow-lg px-2 py-1">
                <Image className="bg-[#111]/20 rounded-lg" height={60} width={80} src={e.img}></Image>
                <div className="h-full">
                  <h1 className="absolute top-[5vh] left-[20vh] text-lg font-bold font-serif">{e.name}</h1>
                  <div id="ability" className="flex absolute bottom-[3vh] left-[20vh]">
                    <div className="bg-[#111]/20 relative h-6 rounded-full w-auto px-2 flex items-center justify-center font-regular font-sans text-sm">
                      <p className="relative bottom-[4px]">Duration: <span className="text-cyan-800">{e.time} Month</span></p>
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
