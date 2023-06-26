import Link from 'next/link';
import React from 'react';

import {twMerge} from 'tailwind-merge';

const Button = ({className, children, disabled, type='button', props, href, target=''}) => {
  return (
    <Link target={target} href={href}>
      <button  type={type} className={twMerge(
        `w-full rounded-full bg-violet-500 border border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:text-black transition`,
        className
        )} disabled={disabled} {...props}>
        {children}
      </button>
    </Link>
  )
}

export default Button;