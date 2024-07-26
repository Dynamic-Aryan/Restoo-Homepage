import React from 'react'

const Gallery = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
       <span className='text-center text-3xl font-bold leading-relaxed md:text-5xl'>
        Change the restaurant loyalty paradigm
      </span>
      <span className='mt-6 text-center text-sm leading-relaxed md:text-sm'>
      Create personalized loyalty programs that turn first-time visitors into lifetime fans
        <br />
        <span className='block'>
          Understand your revenue sources and enhance customer experiences with data-driven insights
        </span>
      </span>
      <div className='flex mt-12'>
        
        <button className=' px-8 py-4 rounded border border-white'>
          See More
        </button>
      </div>
    </div>
  )
}

export default Gallery