import React from "react";
import { CiSearch } from "react-icons/ci";
import Competions from "./Competions";
import Teams from "./Teams";
import Regions from "./Regions";

function SideBar() {
  return (
    <div className="w-[15%] sticky top-0 bg-primary min-h-screen   flex flex-col items-center pt-10  ">
      <div className="search  flex items-center gap-4 bg-sidebar rounded-2xl px-2 ">
        <button>
          <CiSearch className="text-white text-xl " />
        </button>
        <input
          type="text"
          className="w-11/12 h-10 rounded-2xl text-white outline-none bg-sidebar"
          placeholder="Search"
        />
      </div>

      <Competions />
      <Teams />
      <Regions />
    </div>
  );
}

export default SideBar;
