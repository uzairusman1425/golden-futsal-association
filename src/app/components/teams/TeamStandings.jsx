import React from "react";
import TeamStandingsList from "./TeamStandingsList";
function TeamStandings() {
  return (
    <>
      <div className="list w-full mt-10  h-full ">
        <table className="w-full h-full flex flex-col gap-2">
        <thead className="flex w-full h-6 text-white items-center">
            <tr className="lg:text-left w-full  h-full lg:block flex items-center ">
              <th className="lg:w-[10%] w-[5%] ">#</th>
              <th className="lg:w-[38%] w-[20%]">TEAM</th>
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
          <TeamStandingsList />
          <TeamStandingsList />
          <TeamStandingsList />
          <TeamStandingsList />
          <TeamStandingsList />
          <TeamStandingsList />
          <TeamStandingsList />
          <TeamStandingsList />
          <TeamStandingsList />
        </table>
      </div>
    </>
  );
}

export default TeamStandings;
