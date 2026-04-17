"use client";

import { useContext } from "react";
import { FriendsContext } from "@/components/context/ContextProvaider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Buttons = ({ datas }) => {
  const { setSelectedData } = useContext(FriendsContext);
  const router = useRouter();

  const handleClick = (type) => {
    const newItem = {
      name: datas.name,
      action: type,
      date: new Date().toLocaleDateString(),
    };

    const prev = JSON.parse(localStorage.getItem("timeline") || "[]");
    const updated = [newItem, ...prev];

    localStorage.setItem("timeline", JSON.stringify(updated));
    setSelectedData(updated);

    toast.success(`${type} added`);

    // 🔥 MOBILE FIX
    window.location.href = "/timeline"; 
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => handleClick("Call")} className="btn btn-outline">
        📞 Call
      </button>

      <button onClick={() => handleClick("Text")} className="btn btn-outline">
        💬 Text
      </button>

      <button onClick={() => handleClick("Video")} className="btn btn-outline">
        🎥 Video
      </button>
    </div>
  );
};

export default Buttons;