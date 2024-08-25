import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-4 py-3 bg-gradient-to-r from-indigo-500 to-blue-300 '>
        <div className='pt-2 '>
        <span className='text-white text-xl flex justify-center '><FaFacebookF className='mx-3 cursor-pointer hover:text-blue-600'/><FaInstagram className='mx-3 cursor-pointer hover:text-red-600'/><FaTwitter className='mx-3 cursor-pointer hover:text-blue-600'/></span>
        <h1 className='text-white font-bold flex justify-center pt-1 text-xl'>Customer Relationship Management</h1>
        <p className='text-white text-lg font-semibold flex justify-center pt-1 '>Copyright <FaRegCopyright className='ml-1 mt-1.5'/> 2024 ScriptExp, Inc</p>
        <div className='grid justify-center gap-3 grid-flow-col text-white text-md font-semibold cursor-pointer'>
            <span className=' hover:text-blue-900'>Legal Stuff</span><span className=' hover:text-blue-900'>Privacy Policy</span><span className=' hover:text-blue-900'>Security</span><span className=' hover:text-blue-900'>Website Accessbility</span><span className=' hover:text-blue-900'>Managge Cookies</span>
        </div>
        </div>
      
    </div>
  )
}

export default Footer
