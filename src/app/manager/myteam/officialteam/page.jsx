import TeamList from '@/app/components/manager/TeamList';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";


function page() {
  return (
    <div className="officialteam w-full min-h-screen">
        <div className="search w-full h-max flex items-center  justify-between">
        <div className="w-5/12 lg:w-4/12 h-[40px] bg-sidebar px-2 rounded-3xl flex gap-4 items-center">
          <CiSearch className="text-xl text-white" />
          <input
            type="text"
            name="search"
            id="search"
            className="w-full bg-sidebar outline-none text-white"
            placeholder="Seach"
          />
        </div>
        <div className="w-[150px] lg:w-[200px] h-[40px] ">
          <button className="w-full h-full rounded-3xl flex font-bold items-center justify-center gap-2 bg-yellow-400 ">
            <IoPersonAddOutline />
            Add New Official
          </button>
        </div>
      </div>

      <table className='w-full h-full flex flex-col gap-2 '>
        <thead className='w-full h-12 text-white  flex items-center  '>
            <tr className='w-full h-12 text-left flex  items-center'> 
                <th className='w-[30%] lg:pl-12'>Name</th>
                <th className='w-[70%]'>Position</th>
                <th>Action</th> 
            </tr>
        </thead>
      <TeamList/>
      <TeamList/>
      <TeamList/>
      <TeamList/>
      <TeamList/>
      <TeamList/>
      
      </table>
    </div>
  )
}

export default page