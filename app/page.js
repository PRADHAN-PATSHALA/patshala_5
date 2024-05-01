import { VideoBox } from "./component/VideoBox";
import { LandPage } from "./component/LandPage";



const Main =()=>{
  return(
    <>
      <div className="h-screen w-full">
      <VideoBox />
      <LandPage />
      </div>
    </>
  );
};

export default Main;