import React from "react";
import Standinglist from "./standinglist";
import rm from "../../../../public/images/sidebar/teams/rm.png";

import Image from "next/image";

function Standings() {
  return (
    <>
      <div className="list w-11/12 mt-10 text-[10px] lg:text-[16px] h-full pb-20 ">
        <table className="w-full h-full bg-[#040e17]">
          <thead className="flex w-full h-6 text-white items-center">
            <tr className="lg:text-left w-full  h-full lg:block flex items-center ">
              <th className="lg:w-[10%] w-[5%] ">#</th>
              <th className="lg:w-[60%] w-[20%]">TEAM</th>
              <th className="lg:w-[4%] w-[10%] ">P</th>
              <th className="lg:w-[4%] w-[10%] ">W</th>
              <th className="lg:w-[4%] w-[10%] ">D</th>
              <th className="lg:w-[4%] w-[10%] ">L</th>
              <th className="lg:w-[4%] w-[10%] ">F</th>
              <th className="lg:w-[4%] w-[10%] ">A</th>
              <th className="lg:w-[4%] w-[10%] ">GO</th>
              <th className="lg:w-[4%] w-[10%] ">PTS</th>
            </tr>
          </thead>

        
          <Standinglist />
           <Standinglist />
          <Standinglist />
          <Standinglist />
          <Standinglist />
          <Standinglist />
          <Standinglist />
          <Standinglist />
          <Standinglist />
          <Standinglist />
          <Standinglist /> 
        </table>
      </div>
    </>
  );
}

export default Standings;
