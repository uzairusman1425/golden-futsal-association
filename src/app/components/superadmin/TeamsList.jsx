"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import { FiSave } from "react-icons/fi";






function TeamsList() {
  const [edit, setEdit] = useState(true);

  const Edit = () => {
    setEdit(!edit);
  };
  return (
    <>
      <tbody className="text-gray-400 w-full h-14 bg-primary overflow-x-auto flex items-center px-2">
        <tr className="text-left w-full flex h-full items-center">
          <th className="w-[22%] flex items-center  gap-2 ">
            <Image src={rm} width={20} alt="arsenal.png" />
           {edit?'Real Madrid':<>  <select
                name="Team"
                className="h-10 bg-sidebar  rounded-lg sm:w-[80px] w-[33px] lg:w-[120px] outline-none"
              >
                <option value="Real Madrid">Real Madrid</option>
                <option value="Juventus">Juventus</option>
                
              </select></>}
          </th>
          <th className="w-[16%]  ">
            {edit?'Manager':<>  <select
                name="manager"
                className="h-10 bg-sidebar  rounded-lg  sm:w-[80px] w-[33px] lg:w-[100px]  outline-none"
              >
                <option value="Jacob Jones">Jacob Jones</option>
                <option value="Alex">Alex</option>
               
              </select></>}
          </th>
          <th className="w-[28%]  text-green-400">{edit?'Active':  <select
                name="status"
                className="h-10 bg-sidebar  rounded-lg  sm:w-[80px] w-[50px] xl:w-[100px]  outline-none"
              >
                <option value="Inactive">Inactive</option>
              
              
              </select>}</th>
          <th className="w-[23%]  ">{edit?'19':  <input
                type="number"
                value="19"
                className="bg-sidebar  outline-none h-10 w-[30px] text-white"
              />}</th>
          <th className="w-[10%] flex items-center gap-2 text-xl ">
         {edit?<>
          <button onClick={()=>{setEdit()}}>
              <FaRegEdit />
            </button>
            <button>
              <RiDeleteBinLine />
            </button>
         </>:
          <button onClick={Edit} className="flex items-center gap-2">
          <FiSave className="text-md lg:text-xl" />
          Save
        </button>
         }
          </th>
        </tr>
      </tbody>
    </>
  );
}

export default TeamsList;
