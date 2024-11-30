import Courses from './Courses'
import Hero from './Hero'


const Big = () => {
  return (
    <>
      <div className='h-full w-full z-10'>
        <Hero />
        <Courses />
      </div>
    </>
  )
}

export default Big
