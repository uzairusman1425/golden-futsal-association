import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import Image from 'next/image';

function TeammanagementList() {
  return (
    <tbody className='w-full h-12 bg-primary'>
    <tr className='w-full h-12 text-left text-gray-400 flex items-center px-2'>
      <th className='w-[25%] flex items-center gap-2'>
      <Image src={rm} width={20} alt="arsenal.png" />
          Real Madrid
      </th>
      <th className='w-[15%] '>Jacob Jones</th>
      <th className='w-[30%] text-green-400'>Active</th>
      <th className='w-[25%] '>19</th>
      <th className='flex items-center gap-2 text-xl'>
      <button>
            <FaRegEdit />
          </button>
          <button>
            <RiDeleteBinLine />
          </button>
      </th>
      </tr>
    </tbody>
  )
}

export default TeammanagementList