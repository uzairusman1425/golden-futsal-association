import React from "react";
import { IoIosFootball } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SidebarTeams from "./SidebarTeams";
import England from "../../../../public/images/sidebar/competitons/england.webp";
import Italy from "../../../../public/images/sidebar/competitons/italy.png";
import Germany from "../../../../public/images/sidebar/competitons/germany.png";
import Laliga from "../../../../public/images/sidebar/competitons/laliga.png";

function Competions() {
  return (
    <>
      <div className="competitions w-11/12 h-max pt-4 flex flex-col gap-4">
        <div className="heading flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoIosFootball className="text-golden" />
            <p className="text-white">COMPETITIONS</p>
          </div>
          <div>
            <IoIosArrowForward className="text-white" />
          </div>
        </div>

        <div>
          <hr />
        </div>

        <SidebarTeams
          url="/competitions/standings"
          path={England}
          title="Premier League"
          country="England"
        />
        <SidebarTeams
          url="#"
          path={England}
          title="Champions League"
          country="England"
        />
        <SidebarTeams url="#" path={Laliga} title="Laliga" country="Spain" />
        <SidebarTeams url="#" path={Italy} title="Serie A" country="Italy" />
        <SidebarTeams
          url="#"
          path={Germany}
          title="Bundesliga"
          country="Germany"
        />
      </div>
    </>
  );
}

export default Competions;
