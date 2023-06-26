import Link from 'next/link';
import React from 'react';
import {IconType} from 'react-icons';

import {twMerge} from 'tailwind-merge';




const SideBarItem = ({ icon: Icon, label, active, href }) => {
  return (
    <Link href={href} className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-violet-800 transition text-neutral-500 py-1`, active && "text-violet-800 font-bold"
    )}>
       <Icon size={26} />
       <p className='truncate w-full'>{label}</p>
    </Link>
  )
}

export default SideBarItem