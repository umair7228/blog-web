import React from 'react'
import Home from './home/page'
import bg from '../../public/bg-images/car-bg.jpg'
import Image from 'next/image'
import NewTech from '@/components/new-tech/NewTech'
import Categories from '@/components/categories/Categories'

const page = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center overflow-x-hidden text-white'>
      <Image
        src={bg}
        alt='Home Background'
        fill
        className='w-full absolute top-0 left-0 -z-50'
      />
      <Home />

      <NewTech />

      <div className='w-[80%] border-b-2 border-black/40' />

      <Categories />

    </main>
  )
}

export default page
