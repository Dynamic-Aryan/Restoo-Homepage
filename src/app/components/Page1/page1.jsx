import React from 'react';
import Image1 from '../../assets/Middle/image.svg';
import Image from 'next/image';

const Page1 = () => {
  return (
    <div className='relative flex flex-col items-center justify-center pt-36 bg-page1'>
      <span className='text-center text-3xl leading-relaxed md:text-5xl font-semibold'>
        Restoo helps increase
        <br />
        <span className='mt-3 block'>
          more <span className='text-[#4BC500]'>Customers</span> for your
          restaurant.
        </span>
      </span>
      <span className='mt-4 block text-lg'>
        Building the future of restaurant marketing with small AI technology
      </span>
      <div className='relative flex flex-col items-center justify-center p-7'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] z-10'></div>
        <div className='relative z-20'>
          <Image src={Image1} alt='Centered SVG'/>
        </div>
        <div className='absolute top-28 flex space-x-6 z-30'>
          <button className='rounded bg-[#4BC500] px-8 py-4 text-white'>
            Signup
          </button>
          <button className='rounded border border-white px-8 py-4'>
            Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
