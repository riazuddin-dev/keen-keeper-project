"use client";

import { useContext } from "react";
import { FriendsContext } from "@/components/context/ContextProvaider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"; // ✅ add

const Buttons = ({ datas }) => {
  const { setSelectedData } = useContext(FriendsContext);
  const router = useRouter();

  const handleClick = (type) => {
    const newItem = {
      name: datas.name,
      action: type,
      date: new Date().toLocaleDateString(),
    };

    setSelectedData((prev) => {
      const updated = [newItem, ...prev];

      localStorage.setItem("timeline", JSON.stringify(updated));

      return updated;
    });

    // 🔥 TOAST ADD
   toast.success(`${type} with ${datas.name}`, {
  duration: 2000,
  style: {
    fontSize: "18px",
    padding: "16px 24px",
    borderRadius: "12px",
    background: "#16a34a",
    color: "#fff",
  },
});

    router.push("/timeline");
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