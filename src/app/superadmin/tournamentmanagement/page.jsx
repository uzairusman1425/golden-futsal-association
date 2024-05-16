import TournamentManagementList from '@/app/components/superadmin/TournamentManagementList';
import React from 'react'
import { CiSearch, CiTrophy } from "react-icons/ci";



function page() {
  return (
    <div className="tournamentmanagement w-full min-h-screen flex flex-col gap-4 lg:pl-10 pt-12 ">
        <h1 className='flex gap-2 text-white'><CiTrophy className='text-golden text-2xl '/> TOURNAMENT MANAGEMENT</h1>
        <div className="search-bar w-11/12 h-20 pt-10 flex items-center justify-between">
        <div className='w-5/12 lg:w-4/12 h-[40px] bg-sidebar px-2 rounded-3xl flex gap-4 items-center'>
            <CiSearch className='text-xl text-white'/>
            <input type="text" name="search" id="search" className='w-full bg-sidebar outline-none text-white' placeholder='Seach'/>

        </div>
        <div>
            <button className='bg-yellow-500 text-black px-2 lg:px-4 font-bold py-3 rounded-full'>Create New Tournament</button>
        </div>

        </div>
        <div className="line w-11/12 h-[1px] bg-gray-700"/>
        <table className='w-full lg:w-11/12 h-full flex flex-col gap-4 text-[8px] sm:text-[10px] md:text-[12px] xl:text-[14px]'>
        <thead className='text-gray-400 w-full h-14 overflow-x-auto'>
            <tr className='text-left w-full flex h-full items-center'>
                <th className='w-[22%]  '>TOURNAMENT</th>
                <th className='w-[18%]  '># OF TEAM</th>
                <th className='w-[25%]  '>SYSTEM</th>
                <th className='w-[23%]  '>STATUS</th>
                <th className='w-[10%] '>ACTION</th>
            </tr>
        </thead>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
            <TournamentManagementList/>
           
        </table>
    </div>
  )
}

export default page