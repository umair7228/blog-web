import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo/logo.png'
import Image from 'next/image'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='bg-[#232536] py-3 w-full flex items-center justify-center absolute top-0'>
        <nav className='text-white flex items-center justify-between w-[80%] max-w-screen-2xl'>
            <Link href={'/'} className='text-2xl flex items-center justify-center gap-3 font-bold tracking-wider'>
                <Image
                    src={logo}
                    alt='Logo'
                    className='w-12 h-12'
                />
                UMAIR
            </Link>


            <div className='space-x-6'>
                <Link href={'/'}>
                    <Button variant={'link'} className='text-white text-base'>
                        Home
                    </Button>
                </Link>
                <Link href={'/blogs'}>
                    <Button variant={'link'} className='text-white text-base'>
                        Blogs
                    </Button>
                </Link>
                <Link href={'/about'}>
                    <Button variant={'link'} className='text-white text-base'>
                        About
                    </Button>
                </Link>
                <Link href={'/contact'}>
                    <Button variant={'outline'} className='text-black text-base font-semibold px-6'>
                        Contact
                    </Button>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header
