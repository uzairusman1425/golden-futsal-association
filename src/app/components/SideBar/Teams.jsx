import React from "react";
import { GrGroup } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import Liverpool from "../../../../public/images/sidebar/teams/liverpool.jpg";
import arsenal from "../../../../public/images/sidebar/teams/arsenal.jpg";
import rm from "../../../../public/images/sidebar/teams/rm.png";
import SidebarTeams from "./SidebarTeams";
import Link from "next/link";

function Teams() {
  return (
    <div className="teams w-11/12 h-max pt-4 flex flex-col gap-3 pb-4 ">
      <div className="heading flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GrGroup className="text-golden" />
          <p className="text-white">MY TEAMS</p>
        </div>
        <div>
          <IoIosArrowForward className="text-white" />
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div className="h-max ">
        <SidebarTeams
          url="/teams/overview"
          path={Liverpool}
          title="Liverpool"
          country="England"
        />
        <SidebarTeams
          url="#"
          path={arsenal}
          title="Arsenal"
          country="England"
        />
        <SidebarTeams url="#" path={rm} title="Real Madrid" country="England" />

        <button className="text-golden text-lg pt-2">+ Add new team</button>
      </div>
    </div>
  );
}

export default Teams;
