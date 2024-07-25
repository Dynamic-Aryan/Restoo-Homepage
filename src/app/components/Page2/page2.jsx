import React from 'react'
import Image1 from '../../assets/Middle/image.svg'
import Image from 'next/image'

const Page2 = () => {
  return (
    <div className='relative flex items-center justify-center mt-14 p-7'>
      <div className='absolute inset-0 bg-gradient-to-b from-[#181818] to-black opacity-35'></div>
      <Image src={Image1} alt='Centered SVG' />
    </div>
  )
}

export default Page2
