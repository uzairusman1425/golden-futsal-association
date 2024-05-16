import MatchCard from '@/app/components/superadmin/MatchCard'
import Title from '@/app/components/superadmin/Title'
import React from 'react'



function page() {
  return (
    <div className="matches w-full min-h-screen flex flex-col gap-4 pt-10  lg:pl-10 ">
        <Title/>
        <div className="headings w-full lg:w-11/12 h-10 px-2 text-[8px] sm:text-[10px] lg:text-[14px] text-gray-50 flex items-center mt-4">
        <div className='w-[25%]'><p>DATE</p></div>
        <div className='w-[25%]'><p>TEAM</p></div>
        <div className='w-[25%]'><p>STADIUM</p></div>
        <div className='w-[15%]'><p>OFFICIAL</p></div>
        <div className='w-[13%] '><p>ACTION</p></div>
        </div>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
       
    </div>
  )
}

export default page