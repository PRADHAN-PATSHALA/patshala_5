import { LandPage } from "./component/LandPage";
import Image from 'next/image'
import { Navber } from "./component/Navber";


const Main =()=>{
  return(
    <>
      <div className="relative h-screen w-full">
      <Image fill src="/theam.jpg"></Image>
      <Navber />
      <LandPage />
      </div>
    </>
  );
};

export default Main;