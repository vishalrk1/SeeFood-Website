import Image from 'next/image'

import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import FeatureList from '../../components/feature-list/Feature-list';

export default function Home() {
  return (
    <div className='bg-white rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
      <Header className=''>
        <div className='mb-2'>
          <h1 className='text-black text-3xl font-semibold'>
            Home
          </h1>
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <Hero />
      </div>
      <div className='mb-7 px-6'>
        <FeatureList />
      </div>
    </div>
  )
}
