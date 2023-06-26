import Image from 'next/image'
import React from 'react'

const UploadImageCard = ({previewImage, file}) => {
    return (
        <div className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4'>
            {
                !previewImage ? (
                    <div className='relative h-max min-w-[100px] items-center bg-neutral-50'>
                        <h3 className='p-12 font-medium truncate py-5'>
                            Upload An Image
                        </h3>
                    </div>
                ) 
                : (
                    <div className=' hidden lg:flex relative h-max min-w-[500px] items-center bg-neutral-50'>
                        <div className='relative h-[300px] w-full'>
                                    <Image src={file.preview} alt={file.name} fill
                                        className='object-cover rounded-lg hidden lg:flex '
                                    />
                                </div>
                    </div>
            )
            }
        </div>
    )
}

export default UploadImageCard