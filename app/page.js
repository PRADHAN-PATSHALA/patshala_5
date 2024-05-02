import { LandPage } from "./component/LandPage";
import Image from 'next/image'
import { Navber } from "./component/Navber";
import Cource from "./component/Cource";
import { Footer } from './component/Footer'


const Main =()=>{


  return(
    <>
    <main>
      <div className="relative h-screen w-full">
      <Image fill src="/theam.jpg"></Image>
      <Navber />
      <LandPage />
      </div>
      <section id="cource" className="relative">
        <Cource />
      </section>
      <Footer />
    </main>
    </>
  );
};

export default Main;