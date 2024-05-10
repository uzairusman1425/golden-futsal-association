import React from "react";
import { CiStar } from "react-icons/ci";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import Image from "next/image";

function Matchescard() {
  return (
    <>
      <div className="card-component w-11/12 h-[100px] bg-primary  flex items-center ">
        <div className="left w-[50%] flex items-center text-white pl-2 justify-start gap-16 ">
          <p>
            <CiStar className="text-4xl" />
          </p>
          <div className="flex flex-col text-white">
            <p>01/01/2024</p>
            <p>09:00</p>
          </div>
        </div>
        <div className="right w-[50%] text-white gap-2 flex flex-col">
          <div className="flex items-center gap-4">
            <Image src={arsenal} width={30} alt="arsenal.png" />
            <p>Arsenal</p>
          </div>

          <div className="flex items-center gap-4 ">
            <Image src={rm} width={30} alt="arsenal.png" />
            <p>Real Madrid</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Matchescard;
