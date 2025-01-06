import React from 'react'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import bg1 from '../../../public/bg-images/blog-bg1.png'
import bg2 from '../../../public/bg-images/blog-bg2.png'
import bg4 from '../../../public/bg-images/blog-bg3.png'
import bg3 from '../../../public/bg-images/blog-bg4.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className=" w-full bg-[#31323C] min-h-screen space-y-8 flex items-center justify-center">
      <div className='relative w-[80%] max-w-screen-2xl flex  z-50 items-center'>
        <div className='space-y-8'>
            <h1 className="text-8xl font-bold tracking-wide text-white leading-tight">
                Your Journey <br /> Your Car <br /> Your Way
            </h1>

            <p className="text-lg w-[40%] mt-2 text-white">
                Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi elementum
                vel euismod aliquam. Amet ultrices neque augue consectetur purus
                phasellus. Ullamcorper lorem montes varius amet vestibulum tellus
                facilisis consequat pretium. Et faucibus laoreet molestie diam semper
                fames diam eget.
            </p>

            <Link href={'/about'} className=''>
                <Button variant={"destructive"} className=" text-xl font-bold px-6 py-6 mr-auto mt-6">
                    About Us
                    <Send />
                </Button>
            </Link>
        </div>

        <div className='flex '>
            <Image 
                src={bg1}
                alt='Car Image'
                className='w-[180px] h-[272px] absolute top-3 right-96 -z-40'
            />

            <Image 
                src={bg2}
                alt='Car Image'
                className='w-[180px] h-[350px] absolute -top-5 right-48'
            />

            <Image 
                src={bg3}
                alt='Car Image'
                className='w-[180px] h-[282px] absolute top-48 right-72 -z-30'
            />

            <Image 
                src={bg4}
                alt='Car Image'
                className='w-[185px] h-[357px] absolute top-24 right-20 -z-30'
            />
        </div>
      </div>
    </section>
  )
}

export default Hero
