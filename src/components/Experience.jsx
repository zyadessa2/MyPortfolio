import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({position , company , companyLink , time , address , work}) =>{

    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 , type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize' > {company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span >
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref ,
            offset: ["start end" , "center start"]
        }
    )

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='dark:bg-light  absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="full-stack chat-app" company="@freelancing"
                companyLink="https://chat-3-256e4.web.app/"
                time="2024/3/20-2024/4/15"  address="remotly"
                work="this is a chat app create with react for
                frontend & firebase for backend you can send messages 
                and photos , search for friends and add them like messenger or whatsapp"
                />
                <Details
                position="eCommers App" company="@freelancing"
                companyLink="https://zyadessa2.github.io/react-e-commers/"
                time="2023/10/5-2023/11/10"  address="remotly"
                work="Responsive e-commers app Created using React, bootstrap,
                Stripe, Formik, Yup,react-query, Strapi, and Context , ... to build 
                this entire application. This application will allow you to add products into a 
                cart, have a form to fill out information and make payments through Stripe with a 
                backend supported by Strapi, with real backend product ."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
