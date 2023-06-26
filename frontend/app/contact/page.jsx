import React from 'react'

import Header from '@/components/Header/header';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className='bg-white rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
        <Header className=''>
            <div className='mb-2'>
            <h1 className='text-black text-3xl font-semibold'>
                {`Let's Keep In Touch :)`}
            </h1>
            </div>
        </Header>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-10'>
            <div className='hidden md:flex flex-1 h-[400px] relative mt-5 mb-7 px-6'>
                <Image src='/images/contact.png' fill={true} alt="" className='object-contain'/>
            </div>
            <div className='m-6 items-center'>
                <form className='flex flex-1 flex-col gap-5'>
                    <input type='text' placeholder="name" className='w-max p-5 rounded-xl overflow-hidden border-[1px] border-solid border-black bg-neutral-50 font-bold'/>
                    <input type='text' placeholder="email" className='w-max p-5 rounded-xl overflow-hidden border-[1px] border-solid border-black bg-neutral-50 font-bold'/>
                    <textarea placeholder="message" cols='30' rows='10' className='w-max p-5 rounded-xl overflow-hidden border-[1px] border-solid border-black bg-neutral-50 font-bold'/> 
                    <Button href='#' className='w-max text-white font-medium'>Submit</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactPage;