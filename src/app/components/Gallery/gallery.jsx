import React from 'react'

const Gallery = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
       <span className='text-center text-3xl font-light leading-relaxed md:text-4xl'>
        Gallery
      </span>
      <span className='mt-5 text-center text-sm leading-relaxed md:text-lg'>
       We focus on ergonomics and meeting you where you work.
        <br />
        <span className='block'>
          It's only a keystroke away
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