"use client";
import SquadList from "@/app/components/manager/SquadList";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Player from "@/app/components/manager/Player";


function page() {
  const [hidden, setHidden] = useState(true);
 

  return (
    <>
      <div className="squad w-full min-h-screen mt-4  bg-main flex flex-col gap-4">
        <div className="navigation w-full h-max flex items-center gap-20">
          <a href={"#"} className="text-white hover:text-golden">
            All Squad
          </a>
          <a href={"#"} className="text-white hover:text-golden">
            Tournament A
          </a>
          <a href={"#"} className="text-white hover:text-golden">
            Tournament B
          </a>
        </div>
        <div className="search w-full h-max flex items-center justify-between">
          <div className="w-5/12  lg:w-4/12 h-[40px] bg-sidebar px-2 rounded-3xl flex gap-4 items-center">
            <CiSearch className="text-xl text-white" />
            <input
              type="text"
              name="search"
              id="search"
              className="w-full bg-sidebar outline-none text-white"
              placeholder="Seach"
            />
          </div>
          <div className="w-[120px] sm:w-[160px] lg:w-[200px] h-[40px] ">
            <button
              onClick={() => {
                setHidden(!hidden);
              }}
              className="w-full h-full rounded-3xl flex font-bold items-center justify-center gap-2 bg-yellow-400 "
            >
              <IoPersonAddOutline />
              Request Player
            </button>
          </div>
        </div>
        <div className="line w-full h-[1px] bg-gray-400" />
        <table className="w-full h-full flex flex-col gap-2 text-[8px]  sm:text-[12px] md:text-[14px]">
          <thead className="w-full h-12 overflow-x-auto  text-white  font-light ">
            <tr className="w-full h-full flex items-center   text-left overflow-x-auto">
              <th className="xl:w-[25%]  w-[20%] ">NAME</th>
              <th className="xl:w-[15%] w-[18%]  lg:w-[20%]">POSTION</th>
              <th className="xl:w-[12%] w-[22%]  lg:w-[20%]">PERFORMANCE</th>
              <th className="xl:w-[20%] w-[18%] lg:w-[25%]">STATUS</th>
              <th className="xl:w-[15%] w-[15%] lg:w-[18%]">JERSEY NUMBER</th>
              <th className=" ">ACTION</th>
            </tr>
          </thead>

          


            <SquadList />

         <SquadList/>
        <SquadList/>
        <SquadList/>
        <SquadList/>   
        </table>
      </div>

      <div
        className={`requestplayer lg:w-4/12 xl:w-3/12 h-screen bg-[#061727] ${
          hidden ? "hidden" : "fixed"
        } top-20 right-0`}
      >
        <div className="w-full h-full flex flex-col items-center gap-4">
          <div className="title w-full h-12 flex text-white items-center justify-between px-4 text-xl ">
            <h1>REQUEST NEW PLAYER</h1>
            <button
              onClick={() => {
                setHidden(!hidden);
              }}
            >
              <RxCross2 className="text-2xl" />
            </button>
          </div>

          <div className="w-11/12 h-[35px] bg-sidebar px-2 rounded-sm flex gap-4 items-center">
            <CiSearch className="text-xl text-white" />
            <input
              type="text"
              name="search"
              id="search"
              className="w-full bg-sidebar outline-none text-white"
              placeholder="Seach"
            />
          </div>

          <Player />

          <div className="buttons w-[70%] h-20  gap-4 flex self-end">
            <button className="w-[100px] h-[40px] rounded-full bg-[#061727] text-golden border-[1px] border-golden">
              cancel
            </button>
            <button className="w-[180px] h-[40px] rounded-full font-semibold bg-yellow-500 text-black">
              Request Player
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
