'use client'
import React, { useState } from "react";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";
import { FiSave } from "react-icons/fi";


function TransferList() {
  const [edit,setEdit]=useState(true)

  const Edit = ()=>{
    setEdit(!edit)
  }

  return (
    
    <>
      <tbody className="w-full rounded-lg h-20  bg-primary flex  items-center text-white overflow-y-auto">
        <tr className="w-full h-full flex items-center gap-7 sm:gap-4 lg:gap-0 lg:text-[12px] 2xl:text-[16px] ">
          <td className="w-[15%] ">{edit?'01/01/2024':
          <>
            <input
                type="date"
                value="97"
                className="bg-sidebar  outline-none h-10 w-[30px] lg:w-[50px] text-white"
              />
          </>}</td>

          <td className="w-[21%]">{edit?'Esdaille DJ':<>
          <select name="Player" id="asd" className="h-10 bg-sidebar w-[30px] sm:w-[80px] lg:w-[100px] outline-none">
            <option value="James">James</option>
            <option value="Robert">Robert</option>
          </select>
          </>}</td>

          <td className="flex items-center gap-[1px] lg:gap-2  w-[21%]">
            <Image src={arsenal} width={20} alt="arsenal.png" />
            {edit?'Arsenal':<>
            <select name="Team" id="asd" className="h-10 bg-sidebar w-[30px] sm:w-[80px] lg:w-[100px] outline-none">
            <option value="Real Madrid">Real Madrid</option>
            <option value="Juventus">Juventus</option>
          </select>
            </>}
          </td>

          <td className="flex items-center gap-1 lg:gap-2 w-[23%] ">
            <FaArrowRight className="text-green-400 text-sm lg:text-2xl" />
            <Image src={rm} width={20} alt="rm.png" />
            {edit?'Real Madrid':<>
            <select name="Team" id="asd" className="h-10 bg-sidebar w-[30px] sm:w-[80px] lg:w-[100px] outline-none">
            <option value="Real Madrid">Real Madrid</option>
            <option value="Juventus">Juventus</option>
          </select>
            </>}
          </td>
          
          <td className="w-[12%] text-green-400">{edit?'Pending':<>
          <select name="Status" id="asd" className="h-10 bg-sidebar w-[30px] sm:w-[80px] lg:w-[100px] outline-none">
            <option value="Incomplete">Incomplete</option>
           
          </select>
          </>
          }</td>


          <td className="flex items-center gap-1 lg:gap-2 pl-2 text-sm sm:text-md md:text-lg lg:text-xl w-[10%]">
          {edit?<>  <button>
              <FaRegEdit onClick={()=>{Edit()}} />
            </button>
            <button>
              <MdOutlineCancel />
            </button></>:  <button onClick={Edit} className="flex items-center gap-2">
                <FiSave className="text-md lg:text-xl" />
                Save
              </button>}
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TransferList;
