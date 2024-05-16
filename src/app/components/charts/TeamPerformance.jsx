"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const data = [
  { pct: 80, fill: "red" },
  { pct: 50, fill: "yellow" },
  { pct: 70, fill: "green" },
];

function TeamPerformance() {
  return (
    <div className="team w-10/12 sm:w-8/12 md:w-6/12  lg:w-10/12 h-[300px] rounded-xl bg-primary flex flex-col items-center justify-center">
      <h1 className="font-semibold flex self-start ml-6 mt-4">
        Team Performance
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="60%"
          barSize={10}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey={"pct"}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar background dataKey="pct" angleAxisId={0} data={data} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TeamPerformance;
