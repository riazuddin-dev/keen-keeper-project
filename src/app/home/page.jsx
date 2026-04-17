"use client";

import React from "react";
import friendsData from "../../../public/data.json";
import Link from "next/link";

const Home = () => {
  // 🔥 Dynamic Stats
  const totalFriends = friendsData.length;
  const onTrack = friendsData.filter((f) => f.status === "ok").length;
  const needAttention = friendsData.filter(
    (f) => f.status !== "ok"
  ).length;

  return (
    <div className="bg-base-200 min-h-screen p-6">

      {/* HEADER */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn btn-accent btn-sm">
          + Add a Friend
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
        
        <div className="card bg-base-100 shadow p-4 text-center">
          <h2 className="font-bold text-lg">{totalFriends}</h2>
          <p className="text-sm text-gray-500">Total Friends</p>
        </div>

        <div className="card bg-base-100 shadow p-4 text-center">
          <h2 className="font-bold text-lg">{onTrack}</h2>
          <p className="text-sm text-gray-500">On Track</p>
        </div>

        <div className="card bg-base-100 shadow p-4 text-center">
          <h2 className="font-bold text-lg">{needAttention}</h2>
          <p className="text-sm text-gray-500">Need Attention</p>
        </div>

        <div className="card bg-base-100 shadow p-4 text-center">
          <h2 className="font-bold text-lg">12</h2>
          <p className="text-sm text-gray-500">
            Interactions This Month
          </p>
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
            
            <div className="card bg-base-100 shadow-md p-5 items-center text-center rounded-2xl hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

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