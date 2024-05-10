"use client";
import Matchescard from "@/app/components/competitions/Matchescard";
import Matchescard1 from "@/app/components/competitions/Matchescard1";
import Standings from "@/app/components/competitions/MiniStandings";
import React, { useState } from "react";

function page() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section>
        <div className="overview w-full h-full pt-10 flex flex-col gap-8">
          <h1 className="text-white">FIXTURES</h1>
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
        <div className="results w-full h-full pt-10 flex flex-col gap-8">
          <h1 className="text-white">RESULTS</h1>
          <div className="card w-11/12 h-full  flex ">
            <div className="left w-[50%] flex text-white  justify-start gap-32">
              <p></p>
              <p>DATE</p>
            </div>
            <div className="right w-[50%] text-white flex  justify-between px-4">
              <p>TEAM</p>
              <p>RESULT</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Matchescard1 />
            <Matchescard1 />
            <Matchescard1 />
          </div>
        </div>

        <div className="standings w-full h-full  flex flex-col items-start mt-4">
          <h1 className="text-white">STANDINGS</h1>
          <Standings show={show} />
        </div>

        <div className="w-full h-full flex items-center justify-center mt-4 pb-4">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="text-golden  text-xl"
          >
            View All
          </button>
        </div>
      </section>
    </>
  );
}

export default page;
