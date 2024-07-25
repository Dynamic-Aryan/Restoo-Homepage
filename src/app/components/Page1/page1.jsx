import React from 'react'

const Page1 = () => {
  return (
    <div className='flex items-center flex-col justify-center pt-20'>
      <span className='text-center text-3xl md:text-5xl leading-relaxed'>
        Restoo helps increase
        <br/>
        <span className='mt-3 block'>
          more <span className='text-[#4BC500]'>Customers</span> for your restaurant.
        </span>
      </span>
      <span className='mt-4 block text-lg'>Building the future of restaurant marketing with small AI technology</span>
      <div className='flex space-x-6 mt-20'>
        <button className='bg-[#4BC500] text-white px-8 py-4 rounded '>
          Signup
        </button>
        <button className=' px-8 py-4 rounded border border-white'>
          Free Demo
        </button>
      </div>
    
    </div>
  )
}

export default Page1
