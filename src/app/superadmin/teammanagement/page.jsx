import React from 'react'
import { PiUsersThree } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import TeammanagementList from '@/app/components/superadmin/TeammanagementList';




function page() {
  return (
   <div className="team-management w-full h-full pt-10 min-h-screen flex flex-col gap-4 pl-10 mt-10">
    <h1 className='flex gap-2 text-white items-center'><PiUsersThree className='text-golden text-xl'/> TEAM MANAGEMENT</h1>
    <div className="search w-full h-max flex items-center  justify-between mt-10">
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
       
      </div>
    <div className='w-[90%] h-[2px] bg-gray-800'/>
    <table className='w-[90%] h-full flex flex-col gap-4'>
      <thead className='w-full h-12  '>
        <tr className='w-full h-10 text-left text-gray-400'>
        <th className='w-[25%] '>TEAM</th>
        <th className='w-[15%] '>MANAGER</th>
        <th className='w-[30%]'>STATUS</th>
        <th className='w-[25%] '># OF PLAYER</th>
        <th>ACTION</th>
        </tr>
      </thead>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>
    <TeammanagementList/>

    </table>
   </div>
  )
}

export default page