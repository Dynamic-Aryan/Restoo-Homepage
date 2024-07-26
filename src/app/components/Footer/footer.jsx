import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/Navbar/icon.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex flex-col p-16 mx-6'>
      <div className='flex justify-between'>
        <div>
          <div className='newsletter space-y-3'>
            <Image src={Logo} alt='Logo' className='h-14 w-44' />
            <p className='text-lg'>
              Building a business can be challenging,
              <br /> our newsletter can help.
            </p>
            <p className='pt-4 font-extralight'>We won't spam, promise! 🤝</p>
            <form action='#' method='post' className='mt-4 flex flex-col'>
              <input
                type='email'
                placeholder='Enter email'
                required
                className='mb-2 border border-white bg-zinc-900 p-2 text-black'
              />
              <button
                type='submit'
                className='w-fit rounded bg-green-500 p-2 text-white'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3 className='font-semibold'>About</h3>
          <u>
            <ul className='mt-5 space-y-3'>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Refund & Cancellation</li>
            </ul>
          </u>
        </div>
        <div>
          <ul className='mt-2 space-y-1'>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faLocationPin} className='mr-2 h-6 w-6' />
              Balaji nagar, pune, Maharashtra
            </li>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faPhone} className='mr-2 h-6 w-6' />
              8637717190
            </li>
            <li className='flex items-center'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-2 h-6 w-6' />
              contact@restooai.com
            </li>
          </ul>
          <div className='mt-3 flex items-center space-x-4'>
            <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
            <FontAwesomeIcon icon={faFacebookF} className='h-6 w-6' />
            <FontAwesomeIcon icon={faLinkedinIn} className='h-6 w-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
