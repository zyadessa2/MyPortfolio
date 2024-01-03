import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='dark:text-light dark:border-light w-full border-t-2
    border-solid border-dark font-medium text-lg sm:text-base'>
        <Layout ClassName='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            build with <span className='text-primary dark:text-primaryDark text-2xl px-1 '>&#9825;</span>
            by &nbsp;<a target='_blank' href="https://www.linkedin.com/in/ziad-essa/" className='underline underline-offset-2'>ziad essa</a>
            </div>
            <a href="https://www.linkedin.com/in/ziad-essa/" target={'_blank'} className='underline underline-offset-2'>say hello</a>
        </Layout>
    </footer>
  )
}

export default Footer
