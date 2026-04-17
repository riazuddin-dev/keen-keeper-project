"use client";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50">

      {/* Animated circle */}
      <div className="relative flex items-center justify-center mb-6">
        
        <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-green-400 opacity-20"></span>
        
        <span className="relative inline-flex h-16 w-16 rounded-full bg-green-600"></span>
      
      </div>

      {/* Text */}
      <h2 className="text-xl font-semibold text-gray-700 tracking-wide">
        Loading your connections...
      </h2>

      {/* Dots animation */}
      <div className="flex gap-1 mt-3">
        <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>

      {/* Sub text */}
      <p className="text-gray-400 text-sm mt-4">
        Please wait a moment
      </p>

    </div>
  );
};

export default Loading;