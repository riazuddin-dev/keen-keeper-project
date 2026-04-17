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
    <div className="p-6 bg-base-200 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6 text-center">
        Friendship Analytics
      </h1>

      <div className="bg-white p-6 rounded-lg shadow w-full max-w-3xl mx-auto">
        
        <h2 className="text-center text-gray-500 mb-6">
          By Interaction Type
        </h2>

        {/* 🔥 RESPONSIVE BIG CHART */}
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
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Stats;