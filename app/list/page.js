import React from 'react'
import { listStudent } from '../api/read/route'


const List = () => {


  return (
    <>
      <div className='h-full w-full px-20'>
        <div className='min-h-screen w-full bg-white'>
          <div className='flex gap-10 justify-center text-xl text-bold underline'>
            <h1>Student Name</h1>
            <h1>Father's Name</h1>
            <h1>Course Name</h1>
          </div>
          <div className='h-[5vh] w-full flex gap-10 relative top-6 left-[55vh]'>
            <p>{listStudent().name}</p>
            <p>{listStudent().fatherName}</p>
            <p>{listStudent().courseName}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default List
