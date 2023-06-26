import React from 'react';

import { CameraIcon, ArrowDownIcon, CloudArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Take an Image',
    description:
      'Click and upload an image of food you are having on website.',
    icon: CameraIcon,
  },
  {
    name: 'Send Image For Classification',
    description:
      'Press get food recipe button and then wait for it to classify food name from uploaded image.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Get Classification Results',
    description:
      'Explore different recipes of food and get caleory breakdown of respective dish.',
    icon: ArrowDownIcon,
  },
  {
    name: 'Search Food Names',
    description:
      'You can also find recipes and caleory breakdown with food name from explore page.',
    icon: MagnifyingGlassIcon,
  },
]

const FeatureList = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    How Does It Work ?
                </p>
                <p className="mt-3 text-lg leading-8 text-gray-600">
                    A Step By Step Guid On How To Use See Food App 
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
        </div>
    );
};

export default FeatureList;