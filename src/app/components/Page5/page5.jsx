import Image from 'next/image'
import Image1 from '../../assets/Page5/page5.svg'
import React from 'react'

const statistics = [
  {
    value: '2.5x',
    description: 'Increase in sales during non-peak hours'
  },
  {
    value: '70%',
    description: 'Increase in returning customers'
  },
  {
    value: '3x',
    description: 'Increase in positive Google reviews'
  }
]

const Page5 = () => {
  return (
    <div className='flex md:flex-row items-center justify-center pt-16'>
      <Image
        src={Image1}
        alt='Centered SVG'
        className='mt-3 w-[400px] md:w-fit'
      />
      <div className='flex flex-col items-start gap-10 rounded-lg p-7 '>
        {statistics.map(({ value, description }) => (
          <div key={value} className='flex flex-col'>
            <span className='text-5xl font-bold'>{value}</span>
            <span className='text-lg'>{description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page5
