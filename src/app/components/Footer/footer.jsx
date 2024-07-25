import React from 'react'
import locationIcon from '../../assets/Footer/location.svg'
import phoneIcon from '../../assets/Footer/phone.svg'
import emailIcon from '../../assets/Footer/phone.svg'
import twitterIcon from '../../assets/Footer/twitter.svg'
import facebookIcon from '../../assets/Footer/facebook.svg'
import linkedinIcon from '../../assets/Footer/linkedin.svg'

const Footer = () => {
  return (
    <div className='flex flex-col p-16'>
      <div className='flex justify-between'>
        <div>
          <h3 className='font-semibold'>Resources</h3>
          <ul className='mt-5 space-y-1'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold'>About</h3>
          <ul className='mt-5 space-y-1'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </div>
        <div>
          <ul className='mt-2 space-y-1'>
            <li className='flex items-center'>
              <img src={locationIcon} alt='Location' className='mr-2 h-6 w-6' />
              Balaji nagar, pune, Maharashtra
            </li>
            <li className='flex items-center'>
              <img src={phoneIcon} alt='Phone' className='mr-2 h-6 w-6' />
              8637717190
            </li>
            <li className='flex items-center'>
              <img src={emailIcon} alt='Email' className='mr-2 h-6 w-6' />
              contact@restooai.com
            </li>
          </ul>
          <div className='mt-3 flex items-center space-x-4'>
            <img src={twitterIcon} alt='Twitter' className='h-6 w-6' />
            <img src={facebookIcon} alt='Facebook' className='h-6 w-6' />
            <img src={linkedinIcon} alt='LinkedIn' className='h-6 w-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
