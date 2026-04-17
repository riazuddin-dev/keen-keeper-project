"use client";

import { useContext } from "react";
import { FriendsContext } from "@/components/context/ContextProvaider";
import { useRouter } from "next/navigation";

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

      // 🔥 immediate save (important)
      localStorage.setItem("timeline", JSON.stringify(updated));

      return updated;
    });

    router.push("/timeline");
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => handleClick("Call")} className="btn btn-outline">📞 Call</button>
      <button onClick={() => handleClick("Text")} className="btn btn-outline">💬 Text</button>
      <button onClick={() => handleClick("Video")} className="btn btn-outline">🎥 Video</button>
    </div>
  );
};

export default Buttons;