"use client";

import { FriendsContext } from "@/components/context/ContextProvaider";
import { useContext, useState } from "react";

const Timeline = () => {
  const { selectedData } = useContext(FriendsContext);

  // 🔥 FILTER STATE
  const [filter, setFilter] = useState("All");

  // 🔥 FILTER LOGIC
  const filteredData =
    filter === "All"
      ? selectedData
      : selectedData.filter((item) => item.action === filter);

  if (selectedData.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="text-5xl mb-4">📭</div>

        <h2 className="text-xl font-semibold mb-2">
          No interactions yet
        </h2>

        <p className="text-gray-500 mb-4">
          Start by calling, texting, or video chatting with a friend.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      {/* 🔥 FILTER UI */}
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-52"
        >
          <option value="All">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredData.map((item, index) => (
          
          <div
            key={index}
            className="flex items-center gap-4 bg-base-100 p-4 rounded-lg shadow"
          >
            
            {/* ICON */}
            <div className="text-2xl">
              {item.action === "Call" && "📞"}
              {item.action === "Text" && "💬"}
              {item.action === "Video" && "🎥"}
            </div>

            {/* TEXT */}
            <div>
              <h2 className="font-semibold">
                {item.action} with {item.name}
              </h2>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Timeline;