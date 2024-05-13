import React from 'react'
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import Image from 'next/image';
import { CiStar } from 'react-icons/ci';



function Teamcard() {
  return (
    <div className="card-component w-11/12 h-[100px] bg-primary  flex items-center ">
    <div className="left w-[50%] flex items-center text-white pl-2 justify-start lg:gap-8 gap-3 sm:gap-6 px-2">
      <p>
        <CiStar className="text-4xl" />
      </p>
      <p>AET</p>
      <div className="flex flex-col text-white">
        <p>01/01/2024</p>
        <p>09:00</p>
      </div>
    </div>
    <div className="right w-[50%] items-center justify-between lg:px-4 text-white  flex ">
     <div className='flex flex-col gap-2'>
     <div className="flex items-center gap-4">
        <Image src={arsenal} width={20} alt="arsenal.png" />
        <p>Arsenal</p>
      </div>

      <div className="flex items-center gap-4 ">
        <Image src={rm} width={20} alt="rm.png"/>
        <p>Real Madrid</p>
      </div>


     </div>
     <div className='flex flex-col gap-2'>
      <p>1</p>
      <p>2</p>
     </div>
    </div>
  </div>
  )
}

export default Teamcard