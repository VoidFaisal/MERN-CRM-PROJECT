import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const toggle = useSelector((state)=>state.sidetoggle.value)
    console.log(toggle);
    
  return (
    <>
    <div className='min-h-screen m-0 grid grid-rows-1'>
    <div className='w-full  '>
      <Navbar/>
    </div>
   <div className={`w-full h-screen bg-blue-200 `}>
    <div className={`${toggle?"":"ml-64"}`}>
        dsandsandna
    </div>

   </div>
    <div className='w-full  '>
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default Dashboard
