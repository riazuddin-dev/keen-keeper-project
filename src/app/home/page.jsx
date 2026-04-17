"use client";

import React from "react";
import friendsData from "../../../public/data.json";
import Link from "next/link";

const Home = () => {
  // stats
  const totalFriends = friendsData.length;
  const onTrack = friendsData.filter((f) => f.status === "ok").length;
  const needAttention = friendsData.filter(
    (f) => f.status !== "ok"
  ).length;

  return (
    <div className="bg-base-200 min-h-screen p-6">

      {/* HEADER */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        
        <h1 className="text-4xl font-extrabold bg-linear-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
          Keep Your Connections Alive
        </h1>

        <p className="text-gray-500">
          Track, nurture, and strengthen the relationships that truly matter in your life.
        </p>

        <button className="btn bg-gradient-to-r from-green-600 to-blue-500 text-white border-none hover:scale-105 transition">
          + Add a Friend
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">
          <h2 className="text-3xl font-bold text-green-600">{totalFriends}</h2>
          <p className="text-gray-500 text-sm">Total Friends</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">
          <h2 className="text-3xl font-bold text-green-500">{onTrack}</h2>
          <p className="text-gray-500 text-sm">On Track</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">
          <h2 className="text-3xl font-bold text-orange-500">{needAttention}</h2>
          <p className="text-gray-500 text-sm">Need Attention</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition text-center">
          <h2 className="text-3xl font-bold text-blue-500">12</h2>
          <p className="text-gray-500 text-sm">Interactions</p>
        </div>

      </div>

      {/* TITLE */}
      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="font-semibold text-lg mb-4">
          Your Friends
        </h2>
      </div>

      {/* FRIEND CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        
        {friendsData.map((data) => (
          <Link key={data.id} href={`/home/${data.id}`}>
            
            <div className="card bg-white shadow-md p-5 items-center text-center rounded-2xl hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

              {/* IMAGE */}
              <img
                src={data.picture}
                alt={data.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              {/* NAME */}
              <h2 className="font-semibold mt-3">
                {data.name}
              </h2>

              {/* DAYS */}
              <p className="text-sm text-gray-500">
                {data.days_since_contact}d ago
              </p>

              {/* TAG */}
              <span className="badge badge-outline mt-2">
                {data.tags[0]}
              </span>

              {/* STATUS */}
              <span
                className={`mt-3 px-3 py-1 text-xs rounded-full text-white ${
                  data.status === "overdue"
                    ? "bg-red-500"
                    : data.status === "due_soon"
                    ? "bg-orange-400"
                    : "bg-green-500"
                }`}
              >
                {data.status}
              </span>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
};

export default Home;