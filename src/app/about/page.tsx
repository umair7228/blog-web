import HeroSection from '@/components/about/HeroSection'
import NewTech from '@/components/new-tech/NewTech'
import React from 'react'

const About = () => {
  return (
    <main className='overflow-x-hidden flex flex-col items-center justify-center'>
      <HeroSection />
      <NewTech />
    </main>
  )
}

export default About
