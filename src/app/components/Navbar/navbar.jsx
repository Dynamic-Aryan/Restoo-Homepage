import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/Navbar/icon.svg'
import Menu from '../../assets/Navbar/menu.svg'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-24 py-6 bg-page1'>
      <div className='flex items-center'>
        <Image src={Logo} alt='Logo' className='h-14 w-44' />
      </div>
      <div className='hidden md:flex md:ml-auto md:space-x-11'>
        <a href='#home' className='hover:text-gray-400'>
          Home
        </a>
       
        <a href='#contact' className='hover:text-gray-400'>
          Contact
        </a>
      </div>
      <div className='hidden md:block md:ml-10'>
        <button className='rounded border border-[#4BC500] px-10 py-4'>
          Login
        </button>
      </div>
      <div className='md:hidden'>
        <button className='hover:text-gray-400'>
          <Image src={Menu} alt='Menu' className='h-7 w-7' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
