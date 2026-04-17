"use client";

const loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">

      {/* SPINNER */}
      <span className="loading loading-ring loading-lg text-green-700 mb-6"></span>

      {/* TEXT */}
      <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
        Loading your connections...
      </h2>

      {/* SUB TEXT */}
      <p className="text-gray-500 text-sm mt-2">
        Please wait a moment
      </p>

    </div>
  );
};

export default loading;