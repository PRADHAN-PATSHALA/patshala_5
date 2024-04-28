import React from 'react'
import ChatSec from '../component/ChatSec'


const Chat = () => {
  return (
    <>
      <div id='main' className='h-screen w-full'>
        <h1 className='text-center text-lol text-5xl'>`CHAT WITH US`</h1>
        <div className='h-[0.3vh] w-full mt-3 bg-slate-100'></div>
        <ChatSec />
      </div>
    </>
  )
}

export default Chat
