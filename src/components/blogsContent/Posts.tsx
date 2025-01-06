import { posts } from '@/data/posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Posts = () => {
  return (
    <section className='w-[80%] max-w-screen-2xl'>
      <h2 className='pb-6 pt-8 border-b text-5xl font-semibold'>All posts</h2>

      {posts.map((post) => (
        <div key={post.id}
        className='my-8 flex gap-8'
        >
          <Image 
            src={post.image}
            alt={post.title}
            width={430}
            height={300}
          />

          <div className='space-y-8'>
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <h3 className='text-2xl font-semibold'>{post.title}</h3>
            </Link>
            <p className='text-lg'>{post.shortDescription}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Posts
