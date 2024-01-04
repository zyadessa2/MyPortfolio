import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({href , title , className=""}) => {

  const router = useRouter();

  return(
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`absolute left-0 group-hover:w-full 
      transition-[width] ease duration-300
      -bottom-0.5  h-[1px] inline-block dark:bg-light bg-dark ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href , title , className="" , toggle}) => {

  const router = useRouter();
  const handelClick = ()=>{
    toggle()
    router.push(href)
  }


  return(
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handelClick}>
      {title}

      <span className={`absolute left-0 group-hover:w-full 
      transition-[width] ease duration-300
      -bottom-0.5  h-[1px] inline-block dark:bg-dark bg-light ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  )
}


const Navbar = () => {

  const [mode , setMode] = useThemeSwitcher();
  const [isOpen , setIsOpen] = useState(false)

  const handelClick = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <header className='relative dark:text-light z-10 lg:px-16 md:px-12 sm:px-8  w-full px-32 py-8 font-medium flex items-center justify-between '>

      <button className='hidden lg:flex  flex-col justify-center items-center' onClick={handelClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-0.5' : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1.5' : "translate-y-0.5"}`}></span>
      </button>

      <div 
      className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/"  title="Home"  className='mr-4'/>
          <CustomLink href="/about" title="About" className='mx-4'/>
          <CustomLink href="/projects" title="Projects" className='mx-4' />
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href="https://github.com/zyadessa2" target={'_blank'}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-6 mr-3'
          ><GithubIcon/></motion.a>
          <motion.a className='w-6 mx-3' href="https://www.linkedin.com/in/ziad-essa/" target={'_blank'}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          ><LinkedInIcon/></motion.a>
          <motion.a className='w-6 ml-3' href="https://twitter.com/EditingZm" target={'_blank'}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          ><TwitterIcon/></motion.a>
          
          <button
          className={`ml-3  flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          onClick={()=> setMode(mode === "light" ? "dark" : "light")}
          >
            {
              mode === "dark" ?
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
          </button>

        </nav>
      </div>

      {
        isOpen ?
<div 
initial={{scale:0 , opacity:0 , x:"-50%" , y:"-50%"}}
animate={{scale:1 , opacity:1 }}
transition={{duration:1}}
className='z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <nav className='flex items-center flex-col justify-center'>
          <CustomMobileLink href="/"  title="Home"  className='' toggle={handelClick} />
          <CustomMobileLink href="/about" title="About" className='' toggle={handelClick} />
          <CustomMobileLink href="/projects" title="Projects" className=''  toggle={handelClick} />
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap mt-2'>
          <motion.a href="https://github.com/zyadessa2" target={'_blank'}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          className='w-6 mr-3 sm-mx-1 dark:bg-dark rounded-full bg-light'
          ><GithubIcon/></motion.a>
          <motion.a className='w-6 mx-3 sm-mx-1' href="https://www.linkedin.com/in/ziad-essa/" target={'_blank'}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          ><LinkedInIcon/></motion.a>
          <motion.a className='w-6 ml-3 sm-mx-1' href="https://twitter.com/EditingZm" target={'_blank'}
          whileHover={{y:-2}}
          whileTap={{scale:0.9}}
          ><TwitterIcon/></motion.a>
          
          <button
          className={`ml-3  flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          onClick={()=> setMode(mode === "light" ? "dark" : "light")}
          >
            {
              mode === "dark" ?
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
          </button>

        </nav>
      </div>
        : null
      }

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
      <Logo/>
      </div>
    </header>
  )
}

export default Navbar
