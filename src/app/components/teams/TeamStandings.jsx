import React from "react";
import TeamStandingsList from "./TeamStandingsList";
function TeamStandings() {
  return (
    <>
      <div className="list w-full mt-10  h-full ">
        <table className="w-full h-full flex flex-col gap-2">
          <thead className="w-full h-10 flex lg:gap-20 text-gray-400 overflow-y-auto">
            <tr className="w-full h-full flex items-center lg:gap-20 gap-28">
              <th>#</th>
              <th>TEAM</th>
            </tr>
            <tr className="w-full h-full flex items-center gap-10 ">
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
