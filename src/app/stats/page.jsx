"use client";

import { useContext } from "react";
import { FriendsContext } from "@/components/context/ContextProvaider";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const { selectedData } = useContext(FriendsContext);

  const call = selectedData.filter(i => i.action === "Call").length;
  const text = selectedData.filter(i => i.action === "Text").length;
  const video = selectedData.filter(i => i.action === "Video").length;

  const data = [
    { name: "Call", value: call },
    { name: "Text", value: text },
    { name: "Video", value: video },
  ];

  const COLORS = ["#16a34a", "#7c3aed", "#0f766e"];

  return (
    <div className="p-6 bg-gradient-to-br from-base-200 via-white to-base-200 min-h-screen">
      
      {/* HEADING */}
      <h1 className="text-3xl font-bold mb-8 text-center">
        Friendship Analytics
      </h1>

      {/* CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
        
        <h2 className="text-center text-gray-500 mb-6">
          Interaction Breakdown
        </h2>

        {/* 🔥 CHART */}
        <div className="w-full h-[400px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={4}
                label={({ name, value }) => `${name}: ${value}`} // 🔥 label add
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 🔥 EXTRA SUMMARY */}
        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div>
            <p className="text-green-600 font-bold">{call}</p>
            <p className="text-sm text-gray-500">Calls</p>
          </div>
          <div>
            <p className="text-purple-600 font-bold">{text}</p>
            <p className="text-sm text-gray-500">Texts</p>
          </div>
          <div>
            <p className="text-teal-600 font-bold">{video}</p>
            <p className="text-sm text-gray-500">Videos</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;