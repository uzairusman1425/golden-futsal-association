import Playerlist from '@/app/components/teams/Playerlist';
import Link from 'next/link'
import React from 'react'
import { GoClock } from "react-icons/go";
import { RiFootballLine } from "react-icons/ri";
import { RiCheckboxBlankFill } from "react-icons/ri";


function page() {
  return (
    <>
    <div className="squad w-11/12 min-h-screen flex flex-col mt-10 text-white gap-6 ">
    <div className="coach w-full h-[80px] rounded-lg bg-primary flex items-center gap-20 lg:gap-28 px-2 ">
      <div className='flex flex-col '>
        <p className='text-gray-400'>COACH</p>
        <p className='text-white'>Jurgen Klapp</p>
      </div>
      <div className='flex flex-col '>
        <p className='text-gray-400'>AGE</p>
        <p className='text-white'>56</p>
      </div>
      <div className='flex flex-col '>
        <p className='text-gray-400'>CONTRACT EXPIRES</p>
        <p className='text-white'>30/06/2026</p>
      </div>
     

    </div>
    <div className="players w-full h-full bg-main">
<div className="navigation w-full h-14 items-center  flex gap-4 px-2">
<Link className='hover:text-golden text-gray-400' href={''}>All</Link>
<Link className='hover:text-golden text-gray-400 ' href={''}>Home</Link>
<Link className='hover:text-golden text-gray-400' href={''}>Away</Link>
</div>

<div className='w-full h-full'>
<table className='w-full h-full flex flex-col gap-4 over'>
<thead className='w-full h-12 flex   text-gray-400 overflow-y-auto '>
  <tr className='w-full h-full flex items-center text-left px-2'>
    <th className='w-[10%]'>#</th>
    <th className='w-[20%]'>PLAYER</th>
    <th className='w-[20%]'>POSITION</th> 
    <th className='w-[10%]'><GoClock className='text-2xl'/></th>
    <th className='w-[10%]'><RiFootballLine className='text-2xl text-golden'/></th>
    <th className='text-lg w-[10%]'>A</th>
    <th  className='w-[10%]'><RiCheckboxBlankFill className='text-2xl text-red-500'/></th>
    <th  className='w-[10%]'><RiCheckboxBlankFill className='text-2xl text-golden'/></th>
  </tr>

</thead>

<Playerlist/>
<Playerlist/>
<Playerlist/>
<Playerlist/>
<Playerlist/>
<Playerlist/>
<Playerlist/>
<Playerlist/>
<Playerlist/>
  </table>
</div>

  

    </div>
    </div>
    </>
  )
}

export default page