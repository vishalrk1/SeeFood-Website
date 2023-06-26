import Link from 'next/link';
import React from 'react';

import {twMerge} from 'tailwind-merge';

const DropZoneButton = ({ children, className, disabled, onClick}) => {
  return (
    <div>
      <button  type='button' className={twMerge(
          `w-full rounded-full bg-violet-500 border border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:text-black transition`,
          className
          )} disabled={disabled} onClick={onClick}>
          {children}
      </button>
    </div>
  )
}

export default DropZoneButton;