"use client";
import React, { useState } from "react";
import manager from "../../../../public/images/manager/manager.jpg";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiSave } from "react-icons/fi";


function TeamCard() {
  const [edit, setEdit] = useState(true);

  const Edit = () => {
    setEdit(!edit);
  };
  
  return (
    <div className="teamcard w-full lg:w-11/12 h-14 px-2 text-white bg-primary flex items-center text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
      <div className="w-[25%] flex items-center gap-2 lg:gap-4">
        <Image className="rounded-xl" src={manager} alt="manager" width={20} />
      {edit?'Ester Howard':<select
                name="name"
                className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[50px] lg:w-[100px] outline-none"
              >
                <option value="James">James</option>
                <option value="Jacob">Jacob</option>
            
              </select>}
      </div>
      <div className="w-[50%]">
        <p>{edit?'Refree':<select
                name="position"
                className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[50px] lg:w-[100px] outline-none"
              >
                <option value="Refree">Refree</option>
                <option value="refree2">Refree Sub</option>
               
              </select>}</p>
      </div>
      <div className="w-[25%] flex gap-4 text-lg lg:text-xl">
      {edit?<>  <button onClick={()=>{setEdit()}}>
          <FaRegEdit />
        </button>
        <button>
          <RiDeleteBinLine />
        </button></>:<button onClick={Edit} className="flex items-center gap-2">
                <FiSave className="text-xl" />
                Save
              </button>}
      </div>
    </div>
  );
}

export default TeamCard;
