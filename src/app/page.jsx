import React from 'react'
import Navbar from './components/Navbar/navbar'
import Page1 from './components/Page1/page1'
import Page2 from './components/Page2/page2'
import Page3 from './components/Page3/page3'
import Page4 from './components/Page4/page4'
import Gallery from './components/Gallery/gallery'
import Page5 from './components/Page5/page5'
import Page6 from './components/Page6/page6'
import Footer from './components/Footer/footer'
const page = () => {
  return (
    <div className='flex min-h-screen flex-col p-5 text-white'>
      <Navbar />
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Gallery/>
      <Page5/>
      <Page6/>
      <Footer/>
    </div>
  )
}

export default page
