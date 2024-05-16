import React from "react";
import rm from "../../../../public/images/sidebar/teams/rm.png";

import Image from "next/image";

function TeamStandingsList() {
  return (
    <>
       <tbody className="flex w-full  h-16  text-white items-center  bg-primary rounded-xl mt-2 lg:px-2">
         <tr className="flex w-full items-center ">
          <th className=" lg:w-[10%] w-[5%] ">
            <p className=" lg:w-[30px] bg-green-500 flex items-center h-5 lg:h-10 rounded-lg justify-center font-bold">1</p>
          </th>
          <th className="flex items-center justify-center 
          lg:justify-start lg:gap-2 gap-[1px] pl-2 
          lg:pl-0 w-[20%] lg:w-[48%] xl:w-[59%]">
            <Image
              src={rm}
              width={20}
              className="bg-primary rounded-full"
              alt="rm.png"
            />
            Arsenal
          </th>
          <th className="lg:w-[6%] xl:w-[4%] w-[10%]">28</th>
          <th className="lg:w-[6%]  xl:w-[4%] w-[10%]">19</th>
          <th className="lg:w-[6%] xl:w-[4%] w-[10%]">72</th>
          <th className="lg:w-[6%]  xl:w-[4%] w-[10%]">22</th>
          <th className="lg:w-[6%]  xl:w-[4%] w-[10%]">65</th>
          <th className="lg:w-[6%] xl:w-[4%] w-[10%]">26</th>
          <th className="lg:w-[6%] xl:w-[4%] w-[10%]">39</th>
          <th className="lg:w-[6%] xl:w-[4%] w-[10%]">64</th>
        </tr>
           </tbody>
    </>
  );
}

export default TeamStandingsList;
