import React from "react";
import { useSelector } from 'react-redux'
import { FaHome,FaPoll } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { BsPersonCheckFill } from "react-icons/bs";

const Sidebar = () => {
    const toggle = useSelector((state)=>state.sidetoggle.value)


  return (
    <div className={`w-64 ${toggle ? 'hidden':''} h-full bg-indigo-500 fixed`}>
      <div className="my-2 mx-4">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard {toggle}</h1>
        <hr />
        <ul className="mt-3 text-white font-bold">
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
         <a href="" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Home
          </a>
         </li>
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
         <a href="" className="px-3">
            <BsPersonCheckFill className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Customers
          </a>
         </li>
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
         <a href="" className="px-3">
            <FaPerson className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Leads
          </a>
         </li>
         <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
         <a href="" className="px-3">
            <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"/>
            Reports
          </a>
         </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
