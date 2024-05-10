import React from 'react'
import { CiCalendar } from "react-icons/ci";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import Image from 'next/image';
import { HiOutlineMinus } from "react-icons/hi";
import Teamcard from '@/app/components/teams/Teamcard';



function page() {
  return (
  <>
  <div className='w-full min-h-screen flex flex-col gap-8 mt-10 '>
    <div className="teams overview w-11/12 h-[150px] bg-primary flex items-center">
<div className="content w-[30%] flex flex-col gap-4 text-white items-start pl-4 justify-center ">
  <h1 className='text-gray-400'>NEXT MATCH</h1> 

  <div className="date w-[60%] h-max flex items-center gap-4 ">
    <CiCalendar className='text-2xl'/>
    <div>
      <h1 className='text-2xl'>20:00</h1>
      <p className='text-[12px] text-gray-400'>31 March</p>
    </div>
</div>
 

</div>

<div className='w-[2px] h-[60%] opacity-30 bg-gray-500'>

</div>

<div className="team w-[70%] flex items-center justify-center gap-10">
<div className="image1 flex flex-col  items-center">
  <Image src={rm} width={50} alt="arsenal.png"/>
  <p className='text-gray-400'>Real Madrid</p>
  
</div>
<HiOutlineMinus className='text-white text-3xl'/>
<div className="image2 flex flex-col  items-center">
  <Image src={rm} width={50} alt="arsenal.png"/>
  <p className='text-gray-400'>Arsenal</p>
  
</div>
</div>

    </div>
    <div className="team-cards w-full h-full flex flex-col gap-4 pb-10 ">
      <Teamcard/>
      <Teamcard/>
      <Teamcard/>
      <Teamcard/>

    </div>

  </div>
  </>
  )
}

export default page