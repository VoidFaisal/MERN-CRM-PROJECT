import React from 'react'
import { FaBars, FaBell, FaSearch, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { toggleSidebar } from '../redux store/slices/Sidebar/SidebarToggleSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { FaGear,FaUser } from 'react-icons/fa6'

const Navbar = () => {
  const toggle = useSelector((state)=>state.sidetoggle.value)
  const dispatch = useDispatch()
  // console.log(toggle)x
  return (
   <nav className={`bg-gradient-to-r from-indigo-500 to-blue-300 px-4 py-3 flex justify-between ${toggle?'':'ml-64'} `}>
    <div className='flex item-center text-xl'>
      <FaBars className='text-white me-4 cursor-pointer mt-1' onClick={()=>dispatch(toggleSidebar())}/>
      <span className='text-white font-semibold CRM-desktop'>Customer Relation Management</span>
      <span className='text-white font-semibold md:display-none'>CRM</span>
    </div>
    <div className='flex items-center gap-x-5'>
      <div className='relative md:w-65'>
        <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
          <button className='p-1 focus:outline-none text-white md:text-blue-500' type='submit'><FaSearch/></button>
        </span>
        <input type="search" name="" id="" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'/>
      </div>
      <div className='text-white cursor-pointer'><FaBell className='w-6 h-6'/></div>
      <div className=' relative'><button className='text-white group'><FaUserCircle className='w-6 h-6 mt-1'/>
      <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
      <ul className='py-2 text-sm text-gray-950'>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
      </div>
      </button></div>
    </div>
   </nav>
  )
}

export default Navbar

