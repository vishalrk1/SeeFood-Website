import Image from 'next/image';
import React from 'react'

const HeroImage = ({imgPath}) => {
  return (
    <div className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-200 hover:bg-neutral-100/20 transition'>
        <div className='relative h-[400px] w-full'>
            <Image src={imgPath} alt='' fill className='object-cover'/>
        </div>
    </div>
  )
}

export default HeroImage;