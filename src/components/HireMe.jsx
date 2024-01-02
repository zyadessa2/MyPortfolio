import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed md:right-8 md:left-auto md:top-0 md:bottom-auto left-4 bottom-4 flex items-center justify-center overflow-hidden md:absolute'>
      <div className='w-48 md:w-24 h-auto flex items-center justify-center relative'>
        <CircularText className={"fill-dark dark:fill-light animate-spin-slow "}/>
        <Link href="mailto:helmyzez@gmail.com" className='flex items-center 
        justify-center absolute left-1/2
        top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
        border-solid border border-dark w-20 h-20 rounded-full font-semibold
        hover:bg-light hover:text-dark
        hover:dark:text-light hover:dark:border-light hover:dark:bg-dark dark:text-dark dark:bg-light
        md:w-12 md:h-12 md:text-[10px]
        '>
            Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
