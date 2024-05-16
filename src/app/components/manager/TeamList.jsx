'use client'
import React, { useState } from "react";
import manager from "../../../../public/images/manager/manager.jpg";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiSave } from "react-icons/fi";



function TeamList() {
  const [edit,setEdit]=useState(true)

  const Edit = ()=>{
    setEdit(!edit)
  }

  

  return (
    <tbody className="w-full h-20 bg-primary rounded-3xl flex items-center">
      <tr className="text-white w-full text-left flex items-center ">
        <th className="flex items-center gap-2 w-[30%]">
          <Image
            className="rounded-3xl"
            src={manager}
            alt="manager"
            width={30}
          />
          {edit?'Allison':<>
          <select name="player" id="asd" className="h-10 bg-sidebar w-[30px] sm:w-[80px] lg:w-[100px] outline-none">
            <option value="Alice">Alice</option>
            <option value="James">James</option>
          </select>
          </>}
        </th>
        <th className="w-[70%]">
         
          {edit?'Coach':<>
          <select name="position" id="asd" className="h-10 bg-sidebar w-[30px] sm:w-[80px] lg:w-[100px] outline-none">
            <option value="Coach">Coach</option>
            <option value="Manager">Manager</option>
          </select>
          </>}
          </th>
 
        <th className="flex items-center gap-2">
         
         {edit?<>
          <button>
            <FaRegEdit className="text-xl"  onClick={()=>{Edit()}}/>
          </button>
      
      
          <button>
            <MdDelete className="text-xl" />
          </button></>:
           <button onClick={Edit} className="flex items-center gap-2">
           <FiSave className="text-xl" />
           Save
         </button>
          }
          </th>
      </tr>
    </tbody>
  );
}

export default TeamList;
