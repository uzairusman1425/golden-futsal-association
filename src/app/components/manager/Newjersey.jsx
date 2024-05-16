import React from "react";
import jersey from "../../../../public/images/jersey/jersey5.png";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

function Newjersey() {
  return (
    <>
      <div className="jerseycard lg:w-[24%] h-[300px] flex flex-col items-center pt-2  rounded-md bg-primary">
        <p className="text-gray-400">Add new jersey</p>
        <div className="image w-full h-full relative flex items-center justify-center">
          <Image src={jersey} width={200} alt="jersey.png" />
          <div className="absolute top-28">
            <button>
              <FaPlus className="text-black text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newjersey;
