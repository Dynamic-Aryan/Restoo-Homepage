import Image from 'next/image'
import React from 'react'
import Image1 from '../../assets/Page6/page6.svg'
const Page6 = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
        <Image
          src={Image1}
          alt='Centered SVG'
          className='mt-3 w-[400px] md:w-fit'
        />
    </div>
  )
}

export default Page6