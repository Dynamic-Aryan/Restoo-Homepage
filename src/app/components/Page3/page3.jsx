import Image from 'next/image'
import Image2 from '../../assets/Page3/page3.svg'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faBullseye, faRobot } from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    icon: faChartLine,
    title: 'Automated Upsells.',
    description: 'Elevate your guest journey with automated upsell recommendations'
  },
  {
    icon: faBullseye,
    title: 'Target At-Risk Guests.',
    description: "Engage customers who haven't visited in a short while, before it's too late."
  },
  {
    icon: faRobot,
    title: 'Automate campaigns',
    description: 'AI check customer behaviour and retarget them to invite them back.'
  }
]

const Page3 = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-24'>
      <span className='text-center text-3xl font-semibold leading-relaxed md:text-4xl'>
        Struggling To Keep Your Customers Coming Back?
      </span>
      <span className='mt-8 text-center text-sm leading-relaxed md:text-base'>
        Many restaurants struggle with high customer churn and ineffective marketing
        <br />
        <span className='block'>
          Let's change the game with personalized, automated marketing
        </span>
      </span>
      <div className='pt-10 flex md:flex-row flex-col'>
        <Image
          src={Image2}
          alt='Centered SVG'
          className='h-[650px] w-[700px]'
        />
        <div className='flex flex-col gap-6 rounded-lg p-6'>
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className='flex flex-col items-start gap-2 rounded-md p-6'
            >
              <div className='flex flex-row items-center'>
                <div className='flex h-12 w-12 items-center justify-center'>
                  <FontAwesomeIcon icon={icon} className='text-green-500 h-6 w-6' />
                </div>
                <h3 className='ml-4 text-xl font-bold'>{title}</h3>
              </div>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page3
