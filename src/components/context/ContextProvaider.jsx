"use client";
import { createContext, useState } from "react";

export const FriendsContext = createContext();

const ContextProvider = ({ children }) => {
  const [selectedData, setSelectedData] = useState([]);




  // const addTimeline = (item) => {
  //   setSelectedData((prev) => [item, ...prev]);
  // };

  return (
    <FriendsContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </FriendsContext.Provider>
  );
};

export default ContextProvider;