import React from "react";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

function TransferList() {
  return (
    <>
      <tbody className="w-full rounded-lg h-14  bg-primary flex scroll-smooth items-center text-white lg:text-[12px] 2xl:text-[14px] overflow-x-auto">
        <tr className="w-full h-full flex items-center ">
          <td className="w-[18%]">01/01/2024</td>
          <td className="flex items-center gap-2 w-[20%]">
            <Image src={arsenal} width={25} alt="arsenal.png" />
            Arsenal
          </td>
          <td className="w-[30%]">Esdaille DJ</td>
          <td className="flex items-center gap-4 w-[25%]">
            <FaArrowRight className="text-green-400" />
            <Image src={rm} width={25} alt="rm.png" />
            Real Madrid
          </td>
          <td>Loan</td>
        </tr>
      </tbody>
    </>
  );
}

export default TransferList;
