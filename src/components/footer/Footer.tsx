import React from 'react'
import Header from '../header/Header'
import { Button } from '../ui/button'
import { Github, Globe, Linkedin, Send } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative bg-[#232536] w-full py-6 flex flex-col items-center justify-center mt-20'>
        <Header />
      <section className=' w-[80%] text-white mt-16 max-w-screen-2xl'>
        <div className='w-full bg-[#2A2B39] flex items-center justify-between px-14 py-20'>
            <h3 className='text-4xl font-semibold'>Subscribe to our news letter <br /> to get latest updates and news</h3>

            <div className='space-x-4'>
                <input type="email" placeholder='Enter Your Email...' className='px-6 w-72 h-14 rounded-xl' />
                <Button variant={'destructive'} className='h-14 font-semibold rounded-xl px-4 text-xl'>
                    Subscribe
                    <Send />
                </Button>
            </div>
        </div>

        <div className='pt-8 flex items-center justify-between'>
            <div>
                <h4 className='opacity-70'>Hire Me as a Frontend Developer</h4>
                <p className='opacity-70'>umairnawaz7228@gmail.com</p>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <Link href={'https://umair-portfolio-web.vercel.app/'}>
                    <Globe className='opacity-70' />
                </Link>
                <Link href={'https://www.linkedin.com/in/umairnawaz7228/'}>
                    <Linkedin className='opacity-70' />
                </Link>
                <Link href={'https://github.com/umair7228'}>
                    <Github className='opacity-70' />
                </Link>
            </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
