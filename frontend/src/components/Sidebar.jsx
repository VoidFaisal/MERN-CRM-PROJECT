import React from "react";
import { useSelector } from 'react-redux'
import { FaHome,FaPoll } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { BsPersonCheckFill } from "react-icons/bs";
import { Link,Outlet } from "react-router-dom";

const Sidebar = () => {
    const toggle = useSelector((state)=>state.sidetoggle.value)


  return (
    <div className={`w-32 md:w-64 ${toggle ? 'hidden':''} h-full bg-indigo-500 fixed`}>
      <div className="my-2 mx-4">
        <h1 className="text-md md:text-2xl text-white font-bold">Admin Dashboard {toggle}</h1>
        <hr />
        <ul className="mt-3 text-white font-bold md:text-xl text-sm">
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
         <Link to="/" className="px-3">
            <FaHome className="inline-block md:w-6 md:h-6 mr-2 md:-mt-2 -mt-1"/>
            Home
          </Link>
         </li>
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 ">
         <Link to="/customers" className="px-3">
            <BsPersonCheckFill className="inline-block md:w-6 md:h-6 mr-2 md:-mt-2 -mt-1"/>
            Customers
          </Link>
         </li>
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
         <Link to="/leads" className="px-3">
            <FaPerson className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Leads
          </Link>
         </li>
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
         <Link to="/reports" className="px-3">
            <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Reports
          </Link>
         </li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
};

export default Sidebar;
