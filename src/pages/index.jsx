import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ziad essa</title>
        <meta name="description" content="my home page section" />
      </Head>
      <TransitionEffect/>
      <main className='dark:text-light flex items-center text-dark w-full min-h-screen'>
        <Layout ClassName='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='ziad' className='w-full h-auto lg:hidden md:inline-block md:w-full'
              
              sizes='(max-width: 768px) 100vw ,
              (max-width:1200px) 50vw ,
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." ClassName='text-5xl !text-left first-letter:
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a skilled frontend developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/ziadcv.pdf" target='_blank'
                className='hover:dark:text-light hover:dark:border-light
              hover:dark:bg-dark dark:text-dark dark:bg-light flex  
                item-center bg-dark text-light p-2.5 px-6 rounded-lg 
                text-lg font-semibold  hover:bg-light hover:text-dark border-2 
                border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
                download={true }
                >Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                <Link href="mailto:helmyzez@gmail.com"
                className='ml-4 dark:text-light text-lg font-medium capitalize text-dark underline md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='ziad' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
