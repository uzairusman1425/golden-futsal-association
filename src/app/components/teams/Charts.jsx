import React from "react";
import Winning from "../charts/Winning";
import MatchHistory from "../charts/MatchHistory";
import TeamPerformance from "../charts/TeamPerformance";

function Charts() {
  return (
    <>
      <Winning />
      <MatchHistory />
      <TeamPerformance />
    </>
  );
}

export default Charts;
