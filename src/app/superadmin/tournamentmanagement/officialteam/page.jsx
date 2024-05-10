import Title from '@/app/components/superadmin/Title'
import React from 'react'
import manager from "../../../../../public/images/manager/manager.jpg";
import Image from "next/image";
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import TeamCard from '@/app/components/superadmin/TeamCard';


function page() {
  return (
   <div className="officialteam w-full min-h-screen pl-10 flex flex-col gap-4 pt-10">
    <Title/>
    <div className="line w-11/12 h-[1px] bg-gray-700"/>
    <div className="heading w-11/12 h-12 flex items-center text-gray-400">
      <div className='w-[25%] pl-10'><p>NAME</p></div>
      <div className='w-[50%]'><p>POSITION</p></div>
      <div className='w-[25%]'><p>ACTION</p></div>
    </div>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
    <TeamCard/>
   </div>
  )
}

export default page