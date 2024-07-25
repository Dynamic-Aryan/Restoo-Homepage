import React from 'react'
import Image1 from '../../assets/Page4/page4.svg'
import Image from 'next/image'
const Page4 = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
      <span className='text-center text-3xl font-semibold leading-relaxed md:text-4xl'>
        Make more from automated marketing
      </span>
      <span className='mt-8 text-center text-sm leading-relaxed md:text-base'>
       Easily track the performance, and revenue generated from each auto campaign and
        <br />
        <span className='block'>
          fine-tune the rewards that delight customers and drive success
        </span>
      </span>
      <Image
          src={Image1}
          alt='Centered SVG'
          className='mt-3 w-[400px] md:w-fit'
        />

    </div>
  )
}

export default Page4
