import React from "react";
import manager from "../../../../public/images/manager/manager.jpg";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";

function Player() {
  return (
    <>
      <div className="players w-11/12 h-20 bg-black rounded-lg flex items-center px-2">
        <div className="l w-[65%] h-full flex items-center justify-center gap-2 ">
          <div className="image  ">
            <Image src={manager} width={40} alt="manager.png" />
          </div>
          <div className="content flex flex-col  w-full  ">
            <h1 className="text-white text-md">Mohamed Salah</h1>
            <p className="text-gray-400 text-sm ">Forward (Liverpool)</p>
          </div>
        </div>

        <div className="r w-[35%] h-full gap-4 flex justify-between items-center">
          <div className="flex flex-col text-white">
            <p className="text-gray-400">AGE</p>
            <p>31</p>
          </div>
          <button>
            <MdOutlineCancel className="text-red-700 text-xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Player;
