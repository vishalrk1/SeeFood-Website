"use client";

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useDropzone } from 'react-dropzone';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/solid';

import UploadImageCard from './UploadImage-card';
import DropZoneButton from '../Dropzone-button/DropZoneButton';
import LoadingSpinner from '../Loding-spinner/Loding';

const ClassifierDropzone = ({ className }) => {
    const routers = useRouter();
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(false);
    const [classifierLoding, setClassifierLoding] = useState(false);
    const [gettingMlResult, setGettingMlResult] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {

        if (acceptedFiles.length === 1){
            const imageFile = acceptedFiles[0];
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                const imageWithPreview = Object.assign(imageFile, {preview: URL.createObjectURL(imageFile) });
                setImage(imageWithPreview);
                setPreviewImage(true);
          }
          reader.readAsArrayBuffer(acceptedFiles[0]);
        } else {
            throw new Error('Upload Only one image');
        }

    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/*': ['.jpeg', '.png']
        },
    });

    const removeAllFiles = () => {
        setImage(null);
        setPreviewImage(false);
    }

    const useMlClassifier = () => {
        setGettingMlResult(true);
        const imageData = new FormData();
        imageData.append('image', image);

        fetch('http://127.0.0.1:8000/classifier_api/classify/', {
                method: 'POST',
                body: imageData,
            }
        )
        .catch((error) => {throw new Error(error.message)})
        .then((response) => response.json())
        .then((data) => {
            const foodName = data.foodName
            routers.push(`/food-dish/${foodName}`);
        });
    
    }

    return (
        <div className="m-10 rounded-lg overflow-hidden bg-white shadow-md transform items-center">
            <div className="card flex flex-col justify-center items-center">
                {
                    gettingMlResult ? <LoadingSpinner description={'Preparing Recipe'}/> :
                    <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-10'>
                        <div className='flex flex-1 h-[400px] relative mt-5 mb-7 px-6 items-center'>
                            <div
                                {...getRootProps({
                                className: className
                                })}>
                                    <input {...getInputProps()} />
                                    <div className='flex flex-col items-center justify-center gap-4'>
                                    <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
                                    {isDragActive ? (
                                        <p>Drop the files here ...</p>
                                    ) : (
                                        <p>Drag & drop files here, or click to select files</p>
                                    )}
                                </div>  
                            </div>
                        </div>
                        <div className='hidden md:flex w-max h-max flex-1 flex-col gap-5 m-6 items-center'>
                            <UploadImageCard previewImage={previewImage} file={image}/>
                        </div>
                    </div>
                }
                {previewImage ? (<div className='felx justify-center m-5 items-center h-max w-max'>
                    <div className='flex flex-1 items-center gap-x-3'>
                        <DropZoneButton className='text-white font-medium' onClick={useMlClassifier}>
                            Get Food Details
                        </DropZoneButton>
                        <DropZoneButton className='text-white font-medium' onClick={removeAllFiles}>
                            Reset Image
                        </DropZoneButton>
                    </div>
                </div>) : null }
            </div>
        </div>
    )
};

export default ClassifierDropzone;