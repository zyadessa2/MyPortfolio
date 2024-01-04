import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/agency-website-cover-image.jpg"
import project3 from "../../public/images/projects/agency-website-cover-image.jpg"
import project4 from "../../public/images/projects/agency-website-cover-image.jpg"
import project5 from "../../public/images/projects/agency-website-cover-image.jpg"
import project6 from "../../public/images/projects/agency-website-cover-image.jpg"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FeaturedProject = ({type , title , summary , img , link , github}) =>{
  return(
    <article
    className='dark:bg-dark dark:border-light  w-full
    rounded-br-2xl relative flex p-12 items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark' />
      <Link href={link} 
      target='_blank' 
      className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto" 
        
        sizes='(max-width: 768px) 100vw ,
        (max-width:1200px) 50vw ,
        50vw'
        />
      </Link>
      <div className='w-1/2 lg:w-full lg:pl-0 lg:pt-6  flex flex-col items-start justify-between pl-6'>
        <span className='text-promary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline-offset-2' >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt--2 flex items-center'>
          <Link className='w-10' href={github} target='_blank' >
            <GithubIcon/>
          </Link>
          <Link className='dark:bg-light dark:text-dark  ml-4 rounded-lg bg-dark
        text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base' 
          href={link} 
          target='_blank' >
            Visit Project  
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title , type , img , link , github}) =>{

  return(
    <article className='xs:p-4 dark:bg-dark dark:border-light w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
      <div className='md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] dark:bg-light absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark' />

      <Link href={link} target='_blank' 
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='dark:text-primaryDark text-primary font-medium text-xl lg:text-lg md-text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline-offset-2' >
          <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className='w-full mt--2 flex items-center justify-between'>
        <Link className='md:text-base underline text-lg font-semibold' href={link} target='_blank' >
            Visit  
          </Link>
          <Link className='w-8 md:w-6' href={github} target='_blank' >
            <GithubIcon/>
          </Link>
        </div>
      </div>
    </article>
  )
}


const projects = () => {
  return <>
    <Head>
        <title>ziad | projects Page</title>
        <meta name='description' content='my projects section' />
    </Head>
    <TransitionEffect/> 
    <main className='dark:text-light w-full mb-16 flex flex-col items-center justify-center'>
      <Layout ClassName='pt-16'>
        <AnimatedText text="Imagination Trumps Knowledge!"
        ClassName='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
        />
        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'> 
          <div className='col-span-12'>
            <FeaturedProject
            title="eCommers Project"
            img={project1}
            summary="Responsive e-commers app Created using React, bootstrap, Stripe, Formik, Yup,react-query, Strapi, 
            and Context , ... to build this entire application. This application will allow you to add products into a 
            cart, have a form to fill out information and make payments through Stripe with a backend supported by Strapi, 
            with real backend product"
            link="https://zyadessa2.github.io/react-e-commers/"
            github="https://github.com/zyadessa2/react-e-commers"
            type="featured projects"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
          <Project
            title="Weather App"
            img={project3}
            summary="weather app "
            link="https://zyadessa2.github.io/weather-API/"
            github="https://github.com/zyadessa2/weather-API"
            type="featured projects"
            />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project
              title="LogIn System "
              img={project3}
              summary="LogIn system"
              link="https://zyadessa2.github.io/Login-System/"
              github="https://github.com/zyadessa2/Login-System"
              type="featured projects"
              />
          </div>
          <div className='col-span-12'>
            <FeaturedProject
              title="ToDo app With react"
              img={project5}
              summary="A feature-rich ToDo App using React, 
              It shows tasks you write and add task , delete 
              task or all tasks ,display complete task onle or 
              display active anly and store it in
              local storage."
              link="https://zyadessa2.github.io/ToDo-app-with-reactjs/"
              github="https://github.com/zyadessa2/ToDo-app-with-reactjs.git"
              type="featured projects"
              />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project
              title="Store Management System "
              img={project4}
              summary="Have built CRUDS  System and Learned 
              how to create (Create, Read, Update, Delete, and Search) 
              on the CRUDS application with plain JavaScript. We are not 
              going to use any JavaScript frameworks instead we ."
              link="https://zyadessa2.github.io/CRUD/"
              github="https://github.com/zyadessa2/CRUD"
              type="featured projects"
              />
          </div>
          <div className='col-span-6 sm:col-span-12'>
            <Project
              title="Quiz App"
              img={project6}
              summary="quiz app."
              link="https://zyadessa2.github.io/Quiz-app-js/"
              github="https://github.com/zyadessa2/Quiz-app-js.git"
              type="featured projects"
              />
          </div>
        </div>
      </Layout>
    </main>
  </>
}

export default projects
