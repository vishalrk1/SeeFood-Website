import Image from 'next/image';
import React from 'react';

import HeroImage from './hero-image';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-10'>
        <div className='flex flex-1 flex-col items-center'>
            <h1 className='text-2xl font-bold'>Upload Image To Get Started</h1>
            <p>We will provide you details of food your having with Photo.</p>
            <div className='flex flex-1 items-center gap-x-3 mt-4'>
              <Button className='text-white font-medium' href='/classifier'>
                Get Started
              </Button>
              <Button className='text-white font-medium' href='https://github.com/vishalrk1/SeeFood' target='_blank'>
                Project GitHub
              </Button>
            </div>
        </div>
        <div className='flex-1 items-center'>
          <HeroImage imgPath='/images/hero-image.jpg'/>
        </div>
    </div>
  )
}

export default Hero