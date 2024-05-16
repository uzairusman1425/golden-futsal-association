import React from "react";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

function TransferList() {
  return (
    <>
      <tbody className="w-full rounded-lg h-14  bg-primary flex scroll-smooth items-center text-[9px] sm:text-[12px] md:text-[14px] text-white  overflow-x-auto">
        <tr className="w-full h-full flex items-center ">
          <td className="w-[18%]">01/01/2024</td>
          <td className="flex items-center gap-[1px] lg:gap-2 w-[20%]">
            <Image src={arsenal} width={20} alt="arsenal.png" />
            Arsenal
          </td>
          <td className="w-[30%]">Esdaille DJ</td>
          <td className="flex items-center gap-[2px] lg:gap-4 w-[25%]">
            <FaArrowRight className="text-green-400" />
            <Image src={rm} width={20} alt="rm.png" />
            Real Madrid
          </td>
          <td>Loan</td>
        </tr>
      </tbody>
    </>
  );
}

export default TransferList;
