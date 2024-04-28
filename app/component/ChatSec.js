import React from 'react'
import Image from "next/image";


const ChatSec = () => {
  return (
    <>
    <div className='flex items-center justify-center mt-[6vh]'>
        <div className='h-[73vh] w-[120vh] text-om bg-slate-400 rounded '>
            <div id='left' className='bg-om text-slate-200 w-[30%] px-4 py-2 border-solid border-2 border-white text-xl mt-6 ml-7 rounded-[3vh]'>
                <div id='tag' className='flex h-[5vh] w-full' >
                    
                    <h1 className='text-xl ml-2'>You</h1>
                </div>
                <p className='text-ellipsis overflow-hidden mt-2'>volcanoconiosis, a word that refers to a lung</p>
            </div>
            <div id='right' className='bg-om text-slate-200 w-[30%] px-4 py-2 border-solid border-2 border-white text-xl mt-6 ml-7 rounded-[3vh]'>
                <div id='tag' className='flex h-[5vh] w-full' >
                    <Image src="/icon.png" height="30" width="30"></Image>
                    <h1 className='text-xl ml-2'>Pradhan Patshala</h1>
                </div>           
                <p className='text-ellipsis overflow-hidden mt-2'>volcanoconiosis, a word that refers to a lung</p>
            </div>
            <div id='massinp' className='px-2'>
                <input className='w-[85%] px-2 bg-om rounded-[3vh] border-solid border-1 border-white text-slate-200' placeholder='Type anything, you ask' />
            </div>
        </div>
    </div>
    </>
  )
}

export default ChatSec
