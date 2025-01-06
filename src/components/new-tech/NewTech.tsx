import { posts } from '@/data/posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewTech = () => {
  return (
    <section className='w-[80%] py-20 flex flex-col gap-6 max-w-screen-2xl'>

        <div className='flex items-center justify-between w-full'>
            <h2 className='text-3xl text-black font-bold'>New Technology</h2>

            <Link href={'/blogs'}>
                <button className='text-black font-bold'>
                    See All
                </button>
            </Link>
        </div>
        
        <div className='flex items-center gap-6'>      
            {posts.slice(2, 6).map((post) => (
                <div
                key={post.id}
                className='text-black bg-[#F4F0F8] p-4 rounded-lg space-y-4'
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={200}
                        className='object-cover w-full h-56 rounded-lg'
                    />

                    <Link href={`/blogs/${post.id}`} key={post.id}>
                        <h2 className='text-lg font-bold tracking-wide mt-4'>{post.title}</h2>
                    </Link>
                    <p>{post.shortDescription}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default NewTech
