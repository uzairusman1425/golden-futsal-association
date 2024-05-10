import React from "react";
import manager from "../../../../public/images/manager/manager.jpg";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

function TeamCard() {
  return (
    <div className="teamcard w-11/12 h-14 px-2 text-white bg-primary flex items-center">
      <div className="w-[25%] flex items-center gap-4">
        <Image className="rounded-xl" src={manager} alt="manager" width={30} />
        Ester Howard
      </div>
      <div className="w-[50%]">
        <p>Refree</p>
      </div>
      <div className="w-[25%] flex gap-4">
        <button>
          <FaRegEdit />
        </button>
        <button>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}

export default TeamCard;
