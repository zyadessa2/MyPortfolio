import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'


const FeaturedProject = ({type , title , summary , img , link , github}) =>{
  return(
    <article
    className='dark:bg-dark dark:border-light  w-full rounded-br-2xl relative flex p-12 items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl'>
      <div className='dark:bg-light  absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark' />
      <Link href={link} target='_blank' 
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto" 
        priority
        sizes='(max-width: 768px) 100vw ,
        (max-width:1200px) 50vw ,
        50vw'
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-promary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline-offset-2' >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt--2 flex items-center'>
          <Link className='w-10' href={github} target='_blank' >
            <GithubIcon/>
          </Link>
          <Link className='dark:bg-light dark:text-dark  ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold' href={link} target='_blank' >
            Visit Project  
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title , type , img , link , github}) =>{

  return(
    <article className='dark:bg-dark dark:border-light w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
      <div className='dark:bg-light absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark' />

      <Link href={link} target='_blank' 
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='dark:text-primaryDark text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline-offset-2' >
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>

        <div className='w-full mt--2 flex items-center justify-between'>
        <Link className='underline text-lg font-semibold' href={link} target='_blank' >
            Visit  
          </Link>
          <Link className='w-8' href={github} target='_blank' >
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
    <main className='dark:text-light w-full mb-16 flex flex-col items-center justify-center'>
      <Layout ClassName='pt-16'>
        <AnimatedText text="Imagination Trumps Knowledge!"
        ClassName='mb-16 '
        />
        <div className='grid grid-cols-12 gap-24 gap-y-32'> 
          <div className='col-span-12'>
            <FeaturedProject
            title="Crypto Screener Application"
            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
            link="/"
            github="/"
            type="featured projects"
            />
          </div>
          <div className='col-span-6'>
          <Project
            title="Crypto Screener Application"
            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
            link="/"
            github="/"
            type="featured projects"
            />
          </div>
          <div className='col-span-6'>
            <Project
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github="/"
              type="featured projects"
              />
          </div>
          <div className='col-span-12'>
            <FeaturedProject
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github="/"
              type="featured projects"
              />
          </div>
          <div className='col-span-6'>
            <Project
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github="/"
              type="featured projects"
              />
          </div>
          <div className='col-span-6'>
            <Project
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
              link="/"
              github="/"
              type="featured projects"
              />
          </div>
        </div>
      </Layout>
    </main>
  </>
}

export default projects
