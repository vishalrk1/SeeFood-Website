"use client";
import React, { useMemo } from 'react';
import {usePathname} from 'next/navigation';

import {HiHome, HiMail} from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

import Box from '../Sidebar-Box/Box';
import SideBarItem from '../sidebar-item/sidebar-item';
import Library from '../Library/library';

const SideBar = ({children}) => {
    const pathName = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathName === '/',
            href: '/'
        },
        {
            icon: HiMail,
            label: 'Contact',
            active: pathName === '/contact',
            href: '/contact'
        },
    ], [pathName]);

    return (
        <div className='flex h-full'>
            <div className='hidden md:flex flex-col gap-y-2 bg-white h-full w-[300px] p-2'>
                <Box className="flex flex-col gap-y-4 px-5 py-4">
                    {
                        routes.map((item) => (
                            <SideBarItem key={item.label} {...item}/>
                        ))
                    }
                </Box>
                <Box className='h-full flex-1 overflow-auto py-2'>
                    <Library />
                </Box>
            </div>
            <main className='h-full flex-1 overflow-auto py-2'>
                    {children}
            </main>
        </div>
    );
};

export default SideBar;