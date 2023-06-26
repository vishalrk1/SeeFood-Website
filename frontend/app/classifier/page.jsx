import React from 'react';
import Header from '../../components/Header/header';
import ClassifierDropzone from '../../components/Dropzone/Dropzone';

const SeeFoodClassifier = () => {
    return (
      <div className='bg-white rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
        <Header className=''>
            <div className='mb-2'>
            <h1 className='text-black text-3xl font-semibold'>
                Food Image Classifier
            </h1>
            </div>
        </Header>
        <ClassifierDropzone className='h-max p-6 m-10 items-center border-[3px] border-black rounded-lg'/>
      </div>
    )
}

export default SeeFoodClassifier;