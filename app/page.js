import { LandPage } from "./component/LandPage";
import Image from 'next/image'
import Cource from "./component/Cource";


const Main =()=>{


  return(
    <>
    <main>
      <div className="relative h-screen w-full">
      <Image className="absolute" fill src="/theam.jpg"></Image>
      <LandPage />
      </div>
      <section id="cource" className="relative">
        <Cource />
      </section>
    </main>
    </>
  );
};

export default Main;