import Link from 'next/link'
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Hero = ({ heading, message }) => {

  const gotoBottom = () => {
    window.scrollBy({ top:1600, behavior: 'smooth' })
  }
  return (
    <div className='flex items-center justify-center h-screen mb-[-12] bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold '>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>

        <button onClick={gotoBottom} className='group border-2 my-2 flex items-center px-8 py-3 hover:transparent'>

         
          Click Me
           
          <span className='group-hover:rotate-90 duration-200'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Hero
