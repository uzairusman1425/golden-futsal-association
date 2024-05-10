import React from "react";
import Standinglist from "./standinglist";

function Standings() {
  return (
    <>
      <div className="list w-11/12 mt-10  h-full pb-20">
        <table className="w-full h-full bg-[#040e17]">
          <thead className="flex w-full justify-between text-white">
            <tr className="flex gap-20">
              <th>#</th>
              <th>TEAM</th>
            </tr>
            <tr className="flex gap-[34px]">
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>F</th>
              <th>A</th>
              <th>GO</th>
              <th>PTS</th>
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
