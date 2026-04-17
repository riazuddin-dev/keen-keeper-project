"use client";
import { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

export default function ContextProvider({ children }) {
  const [selectedData, setSelectedData] = useState([]);

  // load
  useEffect(() => {
    const data = localStorage.getItem("timeline");
    if (data) setSelectedData(JSON.parse(data));
  }, []);

  // save
  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(selectedData));
  }, [selectedData]);

  return (
    <FriendsContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </FriendsContext.Provider>
  );
}