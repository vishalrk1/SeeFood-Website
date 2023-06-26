import React, { useMemo } from 'react'; 

import { BiSearch, BiPackage } from 'react-icons/bi';
import { HiPhotograph } from 'react-icons/hi';
import SideBarItem from '../sidebar-item/sidebar-item';
import { usePathname } from 'next/navigation';

const Library = () => {
    const pathName = usePathname();
    const routes = useMemo(() => [
        {
            icon: BiPackage,
            label: 'classifier',
            active: pathName === '/classifier',
            href: '/classifier'
        },
        {
            icon: BiSearch,
            label: 'Search Food',
            active:  false, //pathName === '/',
            href: '/'
        },
        {
            icon: HiPhotograph,
            label: 'Background Remover',
            active: false, //pathName === '/classifier',
            href: '/'
        },
    ], [pathName]);

    const onClick = () => {

    }

    return (
        <div className='flex flex-col'>
            <div className='flex items-center justify-between px-5 pt-4'>
                <div className='inline-flex items-center gap-x-2'>
                    <p className='text-black font-bold text-md'>
                        Explore
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 mt-4 px-3'>
                {
                    routes.map((item) => (
                        <SideBarItem  key={item.label} {...item}/>
                    ))
                }
                {/* <SideBarItem href='/' icon={BiSearch} label='Search Food' active={false}/>
                <SideBarItem href='/' icon={HiPhotograph} label='Background Remover' active={false}/> */}
            </div>
        </div>
    )
}

export default Library;