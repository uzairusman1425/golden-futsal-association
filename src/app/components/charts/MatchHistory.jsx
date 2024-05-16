"use client";
import React from "react";
import {
  ComposedChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
const data = [
  {
    name: "WIN",
    uv: 590,
    pv: 800,
    fill: "green",
  },
  {
    name: "LOSE",
    uv: 868,
    pv: 400,
    fill: "red",
  },
  {
    name: "DRAW",
    uv: 1397,
    pv: 600,
    fill: "yellow",
  },
];

function MatchHistory() {
  return (
    <div className="match w-11/12 sm:w-8/12 md:w-6/12  lg:w-10/12 h-[350px] rounded-xl bg-primary flex flex-col items-center gap-2 justify-center">
      <h1 className="font-semibold flex self-start ml-4">Match History</h1>
      <div className="xl:w-full h-[200px] lg:w-[250px] w-full">
        <ResponsiveContainer>
          <ComposedChart
            width={200}
            height={200}
            data={data}
            margin={{
              right: 100,
              left: 100,
              bottom: 10,
            }}
          >
            <XAxis dataKey="name" scale="bottom" axisLine={false} />

            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MatchHistory;
