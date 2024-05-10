import React from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import RegionTeams from "./RegionTeams";
import England from "../../../../public/images/sidebar/regions/england.png";
import Italy from "../../../../public/images/sidebar/competitons/italy.png";
import Germany from "../../../../public/images/sidebar/competitons/germany.png";
import Laliga from "../../../../public/images/sidebar/competitons/laliga.png";

function Regions() {
  return (
    <div className="regions w-11/12 h-max pt-4 flex flex-col gap-4">
      <div className="heading flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CiGlobe className="text-golden" />
          <p className="text-white">REGIONS</p>
        </div>
        <div>
          <IoIosArrowForward className="text-white" />
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="h-max">
        <RegionTeams url="#" path={England} title="England" />
        <RegionTeams url="#" path={Laliga} title="Spain" />

        <RegionTeams url="#" path={Italy} title="Italy" />

        <RegionTeams url="#" path={Germany} title="Germany" />

        <button className="text-golden text-lg pt-2 flex items-center gap-6">
          Show more <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Regions;
