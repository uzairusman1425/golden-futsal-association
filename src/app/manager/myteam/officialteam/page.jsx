import TeamList from '@/app/components/manager/TeamList';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";


function page() {
  return (
    <div className="officialteam w-full min-h-screen">
        <div className="search w-full h-max flex items-center  justify-between">
        <div className="w-4/12 h-[40px] bg-sidebar px-2 rounded-3xl flex gap-4 items-center">
          <CiSearch className="text-xl text-white" />
          <input
            type="text"
            name="search"
            id="search"
            className="w-full bg-sidebar outline-none text-white"
            placeholder="Seach"
          />
        </div>
        <div className="w-[200px] h-[40px] ">
          <button className="w-full h-full rounded-3xl flex font-bold items-center justify-center gap-2 bg-yellow-400 ">
            <IoPersonAddOutline />
            Add New Official
          </button>
        </div>
      </div>

      <table className='w-full h-full flex flex-col gap-2 '>
        <thead className='w-full h-12 text-white text-sm flex items-center  '>
            <tr className='w-[30%] h-12 flex items-center justify-between px-4 '>
                
                <th>Name</th>
                <th className='flex  self-'>Position</th>
            </tr>
            <tr className='w-[70%] h-12 flex items-center justify-end px-4'>
                <th>Action</th>
            </tr>
            <tr></tr>
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