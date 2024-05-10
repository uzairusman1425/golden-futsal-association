import React from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import rm from "../../../../public/images/sidebar/teams/rm.png";





function TeamsList() {
  return (
    <>
      <tbody className="text-gray-400 w-full h-14 bg-primary overflow-x-auto flex items-center px-2">
        <tr className="text-left w-full flex h-full items-center">
          <th className="w-[22%] flex items-center  gap-2 ">
            <Image src={rm} width={20} alt="arsenal.png" />
            Real Madrid
          </th>
          <th className="w-[16%]  ">Jacob Jones</th>
          <th className="w-[28%]  text-green-400">Active</th>
          <th className="w-[23%]  ">19</th>
          <th className="w-[10%] flex items-center gap-2 text-xl ">
            <button>
              <FaRegEdit />
            </button>
            <button>
              <RiDeleteBinLine />
            </button>
          </th>
        </tr>
      </tbody>
    </>
  );
}

export default TeamsList;
