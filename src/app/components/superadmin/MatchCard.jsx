import React from "react";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

function MatchCard() {
  return (
    <>
      <div className="matchcard w-11/12 h-24 px-2 flex items-center text-white bg-primary">
        <div className="w-[25%] flex flex-col">
          <p>01/01/2024</p>
          <p>09:00</p>
        </div>
        <div className="w-[25%] flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <Image src={arsenal} width={30} alt="arsenal.png" />
            <p>Arsenal</p>
          </div>

          <div className="flex items-center gap-4 ">
            <Image src={rm} width={30} alt="arsenal.png" />
            <p>Real Madrid</p>
          </div>
        </div>
        <div className="w-[25%]">
          <p>Anfield</p>
        </div>
        <div className="w-[15%] text-golden">
          <p>View</p>
        </div>
        <div className="w-[13%] flex gap-4 text-xl">
          <button>
            <FaRegEdit />
          </button>
          <button>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </>
  );
}

export default MatchCard;
