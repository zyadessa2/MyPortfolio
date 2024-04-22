import { motion } from 'framer-motion'
import React from 'react'

const Skill = ({name , x , y}) =>{

    return(
        <motion.div className='absolute 
        flex items-center justify-center 
        cursor-pointer rounded-full 
        font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark dark:text-dark dark:bg-light 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
        xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
    whileHover={{scale:1.05}}
    initial={{x:0 , y:0}}
    whileInView={{x:x , y:y , transition:{duration:1.5}}}
    
    >
        {name}
    </motion.div>
    )
}

const Skills = () => {
  return <>
  <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
  <div className='w-full h-screen relative flex items-center justify-center rounded-full 
  dark:bg-circularDark bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
  lg:bg-circularLightLg lg:dark:bg-circularDarkLg
  md:bg-circularLightMd md:dark:bg-circularDarkMd
  sm:bg-circularLightSm sm:dark:bg-circularDarkSm
  '>
    <motion.div className='flex dark:text-dark dark:bg-light items-center 
    justify-center cursor-pointer rounded-full font-semibold 
    bg-dark text-light p-8 shadow-dark lg:p-6 md:p-4 xs:text-xs xs:p-2'
    whileHover={{scale:1.05}}
    >
        Web
    </motion.div>
    <Skill name="HTML" x="-25vw" y="2vw" />
    <Skill name="CSS" x="-5vw" y="-10vw" />
    <Skill name="JavaScript" x="20vw" y="6vw" />
    <Skill name="BootStrap" x="0vw" y="12vw" />
    <Skill name="React.JS" x="-20vw" y="-15vw" />
    <Skill name="Next.JS" x="15vw" y="-12vw" />
    <Skill name="Web Design" x="32vw" y="-5vw" />
    <Skill name="Figma" x="0vw" y="-20vw" />
    <Skill name="Tailwind" x="-25vw" y="18vw" />
    <Skill name="TypeScript" x="18vw" y="18vw" />
    <Skill name="firebase" x="0vw" y="23vw" />
  </div>
  </>
}

export default Skills
