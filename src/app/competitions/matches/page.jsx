import Matchescard from "@/app/components/competitions/Matchescard";
import React from "react";

function page() {
  return (
    <>
      <div className="matches w-full h-full pt-10 flex flex-col gap-8 ">
        <h1 className="text-white">ROUND 28</h1>
        <div className="card w-11/12 h-full  flex ">
          <div className="left w-[50%] flex text-white  justify-start gap-32">
            <p></p>
            <p>DATE</p>
          </div>
          <div className="right w-[50%] text-white">TEAM</div>
        </div>
        <div className="flex flex-col gap-2">
          <Matchescard />
          <Matchescard />
          <Matchescard />
        </div>
      </div>

      <div className=" w-full h-full pt-10 flex flex-col gap-8 pb-10">
        <h1 className="text-white">ROUND 28</h1>
        <div className="card w-11/12 h-full  flex ">
          <div className="left w-[50%] flex text-white  justify-start gap-32">
            <p></p>
            <p>DATE</p>
          </div>
          <div className="right w-[50%] text-white">TEAM</div>
        </div>
        <div className="flex flex-col gap-2 ">
          <Matchescard />
          <Matchescard />
          <Matchescard />
        </div>
      </div>
    </>
  );
}

export default page;
