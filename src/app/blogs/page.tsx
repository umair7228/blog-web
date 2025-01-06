import Hero from '@/components/blogsContent/Hero'
import Posts from '@/components/blogsContent/Posts'
import React from 'react'

const Blogs = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center '>
      <Hero />
      <Posts />
    </main>
  )
}

export default Blogs
