import { FaBookOpen } from "react-icons/fa6";
import { CourcesHead } from "../component/CourcesHead";
const Cources =()=>{
    return(
        <>
        <CourcesHead />
        <div className="opacity-0.2">
            <video src="/vid3.mp4" autoPlay loop muted className="h-screen object-cover w-full" />
        </div>
        <div className="absolute h-auto flex-col w-full top-70 text-white text-center">
                <h1 className="ml-16 md:ml-96 absolute text-xs -top-48 font-serif md:hover:text-3xl flex"><div className="mr-1 md:mr-4"><FaBookOpen /></div> DOAM (DIPLOMA IN OFFICE APPLICATION AND MANAGEMENT)</h1>
                <h1 className="ml-16 md:ml-96 absolute text-xs -top-56 font-serif md:hover:text-3xl flex"><div className="mr-1 md:mr-4"><FaBookOpen /></div> CCA (CERTIFICATE IN COMPUTER APPLICATION)</h1>
                <h1 className="ml-16 md:ml-96 absolute text-xs -top-64 font-serif md:hover:text-3xl flex"><div className="mr-1 md:mr-4"><FaBookOpen /></div> DIT (DIPLOMA IN INFORMATION TECNOLOGY)</h1>
                <h1 className="ml-16 md:ml-96 absolute -top-72 font-serif md:hover:text-3xl flex"><div className="mr-1 md:mr-4"><FaBookOpen /></div> CWD (CERTIFICATE IN WEB DESIGNING)</h1>
                <h1 className="ml-16 md:ml-96 absolute -top-80 font-serif md:hover:text-3xl flex"><div className="mr-1 md:mr-4"><FaBookOpen /></div> JUNIOR-IT (FOR KIDS)</h1>
                <h1 className="ml-0 md:ml-72 absolute text-2xl md:text-5xl -top-16 font-mono font-extrabold hover:text-lol flex">"ONLINE CLASSES AVAILABLE HERE"</h1>
        </div>
            </>
    );
}

export default Cources;