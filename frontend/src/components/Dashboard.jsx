import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'

const Dashboard = () => {
    
    
  return (
    <>
    <div className='min-h-screen  grid grid-rows-1'>
    <div className='w-full fixed'>
      <Navbar />
    </div>
   <div className={`w-full min-h-screen bg-blue-200 `}>
    <Hero/>

   </div>
    <div className='w-full  '>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Dashboard
