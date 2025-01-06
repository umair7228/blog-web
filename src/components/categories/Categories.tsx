import { categories } from '@/data/category'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <section className='w-[80%] max-w-screen-2xl py-20 flex flex-col justify-between gap-6'>

        <h2 className='text-3xl text-black font-bold'>All Categories</h2>
        
        <div className='flex items-center gap-14'>      
            {categories.map((category) => (
                <div
                key={category.id}
                className='text-black bg-[#F4F0F8] p-4 rounded-lg flex flex-col items-center justify-center text-center'
                >
                    <Image
                        src={category.image}
                        alt={category.title}
                        width={300}
                        height={200}
                        className='object-cover w-24 h-24 rounded-full'
                    />

                    
                    <h2 className='text-lg font-bold tracking-wide mt-4 text-center'>{category.title}</h2>
                    
                    <p className='text-center'>{category.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Categories
