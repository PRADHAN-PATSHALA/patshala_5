
import { MdOutlineMailOutline } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";


const Contact =()=>{
    return(
        <>
          <section className="bg-om font-serif dark:bg-gray-900">
    <div className="container grid gap-8 px-6 py-12 mx-auto lg:grid-cols-3">
        <div>
            <p className="font-medium text-blue-500 text-5xl dark:text-blue-400">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold text-blue-500 md:text-3xl dark:text-white">We'd love to hear from you</h1>

            <p className="mt-3 text-blue-400 dark:text-gray-400">Our friendly team is always here to chat.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">
            <div className="p-4 rounded-lg bg-blue-300 md:p-6 dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <MdOutlineMailOutline className="w-8 h-8" />
                </span>

                <h2 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white">Chat for know more</h2>
                <p className="mt-2 text-xl text-gray-900 font-semibold dark:text-gray-400">Speak to our friendly team.</p>
                <p className="mt-2 text-xxl text-blue-500 dark:text-blue-400">pradhanpatshala@gmail.com</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-300 md:p-6 dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <TbMessageChatbot className="w-9 h-9" />
                </span>
                
                <h2 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white">Chat to support</h2>
                <p className="mt-2 text-xl text-gray-900 font-semibold dark:text-gray-400">We're here to help.</p>
                <Link href="/chat" className="mt-2 text-xxl text-blue-500 dark:text-blue-400">Start new chat</Link>
            </div>

            <div className="p-4 rounded-lg bg-blue-300 md:p-6 dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <GrLocation className="w-8 h-8" />
                </span>
                
                <h2 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white">Visit us</h2>
                <p className="mt-2 text-xl text-gray-900 font-semibold dark:text-gray-400">Visit our ofice branch</p>
                <p className="mt-2 text-xxl text-blue-500 dark:text-blue-400">Nazat, Dakshin Akhratala, 24 PGS-(N), West Bengal, INDIA</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-300 md:p-6 dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <LuPhone className="w-8 h-8" />
                </span>
                
                <h2 className="mt-4 font-bold text-3xl text-gray-800 dark:text-white">Call us</h2>
                <p className="mt-2 text-xl text-gray-900 font-semibold dark:text-gray-400">Mon-Fri from 10am to 5pm.</p>
                <p className="mt-2 text-xxl font-sans text-blue-500 dark:text-blue-400">+91 9832290873</p>
            </div>
        </div>
    </div>
    <div>
                <Image src="/map.PNG" height="200" width="450" className="md:block hidden absolute top-80 ml-4"></Image>
            </div>
</section>

        </>
    );
}

export default Contact;