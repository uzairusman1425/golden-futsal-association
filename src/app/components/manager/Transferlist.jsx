import React from "react";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";

function TransferList() {
  return (
    <>
      <tbody className="w-full rounded-lg h-20  bg-primary flex  items-center text-white overflow-y-auto">
        <tr className="w-full h-full flex items-center lg:text-[12px] 2xl:text-[16px] ">
          <td className="w-[15%] ">01/01/2024</td>
          <td className="w-[23%]">Esdaille DJ</td>
          <td className="flex items-center gap-2 w-[23%]">
            <Image src={arsenal} width={25} alt="arsenal.png" />
            Arsenal
          </td>
          <td className="flex items-center gap-2 w-[23%] ">
            <FaArrowRight className="text-green-400 text-2xl" />
            <Image src={rm} width={20} alt="rm.png" />
            Real Madrid
          </td>
          <td className="w-[10%] text-green-400">Pending</td>
          <td className="flex items-center gap-2 text-xl w-[10%]">
            <button>
              <FaRegEdit />
            </button>
            <button>
              <MdOutlineCancel />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default TransferList;
