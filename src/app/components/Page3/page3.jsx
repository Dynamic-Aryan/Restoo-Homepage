import Image from 'next/image'
import Image2 from '../../assets/Page3/page3.svg'
import React from 'react'
import Icon1 from '../../assets/Page3/icon1.svg'
import Icon2 from '../../assets/Page3/icon2.svg'
import Icon3 from '../../assets/Page3/icon3.svg'

const features = [
  {
    icon: "Icon1",
    title: 'Automated Upsells.',
    description:
      'Elevate your guest journey with automated upsell recommendations'
  },
  {
    icon: Icon2,
    title: 'Target At-Risk Guests.',
    description:
      "Engage customers who haven't visited in a short while, before it's too late."
  },
  {
    icon: Icon3,
    title: 'Automate campaigns',
    description:
      'AI check customer behaviour and retarget them to invite them back.'
  }
]

const Page3 = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
      <span className='text-center text-3xl font-semibold leading-relaxed md:text-4xl'>
        Struggling To Keep Your Customers Coming Back?
      </span>
      <span className='mt-8 text-center text-sm leading-relaxed md:text-base'>
        Many restaurants struggle with high customer churn and ineffective
        marketing
        <br />
        <span className='block'>
          Let's change the game with personalized , automated marketing
        </span>
      </span>
      <div className='pt-8 flex md:flex-row flex-col'>
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
              <div className='flex flew-row'>
              <div className='flex h-12 w-12 items-center justify-center '>
                <img src={icon} alt={title} className='h-6 w-6' />
              </div>
              <h3 className='text-xl font-bold'>{title}</h3>
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
