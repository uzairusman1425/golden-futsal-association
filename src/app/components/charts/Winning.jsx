"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
const data = [
  {
    name: "18-24",
    uv: 5,
    pv: 2400,
    fill: "green",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

function Winning() {
  return (
    <div className="winning w-10/12 sm:w-8/12 md:w-6/12 lg:w-10/12 h-[300px] rounded-xl bg-primary flex flex-col items-center gap-2 justify-center">
      <h1 className="font-semibold flex self-start ml-4 mt-4">
        Winning percentage
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="90%"
          barSize={12}
          data={data}
        >
          <RadialBar minAngle={15} background dataKey="uv">
            <LabelList position="inside" content={<CustomLabel />} />
          </RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
const CustomLabel = ({ viewBox }) => {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="20"
      fill="#ffffff"
    >
      75%
    </text>
  );
};

export default Winning;
