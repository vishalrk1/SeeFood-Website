"use client"

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import {twMerge} from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome, HiMail, HiPhotograph } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';

// import Button from '../Button/button';

const Header = ({children, className, onClick=''}) => {
    const router = useRouter();
    return (
        <div className={twMerge(
            `h-fit p-6`
        )}>
            <div className='w-full mb-4 flex items-center justify-between'>
                <div className='hidden md:flex gap-x-2 items-center mb-3'>
                    <button onClick={onClick ==='' ? () => router.back() : () => router.push('/classifier')} className='rounded-full bg-neutral-100 flex items-center justify-center hover:opacity-75 transition'>
                        <RxCaretLeft size={35} className='text-black'/>
                    </button>
                    <button onClick={() => router.forward()} className='rounded-full bg-neutral-100 flex items-center justify-center hover:opacity-75 transition'>
                        <RxCaretRight size={35} className='text-black'/>
                    </button>
                </div>
                <div className='flex md:hidden gap-x-2 items-center'>
                    <button className='rounded-full p-2 bg-neutral-100 flex items-center justify-center hover:opacity-75 transition'>
                        <Link href='/'>
                            <HiHome className='text-black' size={26} />
                        </Link>
                    </button>
                    <button className='rounded-full p-2 bg-neutral-100 flex items-center justify-center hover:opacity-75 transition'>
                        <Link href='/contact'>
                            <HiMail className='text-black' size={26} />
                        </Link>
                    </button>
                </div>
                <div className='flex md:hidden justify-between items-start gap-x-4'>
                    <div>
                        <button className='rounded-full p-2 bg-neutral-100 flex items-center justify-center hover:opacity-75 transition'>
                            <BiSearch className='text-black' size={26} />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-x-4'>
                    <>
                        {/* <div>
                            <Button className='bg-transparent text-neutral-300 font-medium'>
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button className='bg-white px-6 py-2'>
                                Login In
                            </Button>
                        </div> */}
                    </>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header