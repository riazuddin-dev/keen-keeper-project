"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 text-center px-4">

      {/* BIG 404 */}
      <h1 className="text-7xl font-extrabold text-green-700 mb-4 animate-pulse">
        404
      </h1>

      {/* MESSAGE */}
      <h2 className="text-2xl font-semibold mb-2">
        Oops! Lost in the Timeline?
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        Looks like this connection doesn’t exist. Maybe it faded away… or you typed the wrong path.
      </p>

      {/* LOADING STYLE ICON */}
      <div className="mb-6">
        <span className="loading loading-ring loading-lg text-green-700"></span>
      </div>

      {/* BUTTON */}
      <Link href="/">
        <button className="btn bg-green-700 text-white hover:bg-green-800 px-6">
          Back to Home
        </button>
      </Link>

    </div>
  );
}