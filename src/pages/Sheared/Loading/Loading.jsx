import React from "react";

const Loading = () => {
  return (
    <div className="flex gap-2 items-center justify-center h-screen bg-gray-100 ">
      <div className="loader ease-linear  rounded-full border-s-4 border-blue-500 h-12 w-12 mb-4 animate-spin"></div>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Loading</h1>
        <div className="animate-pulse">
          <h1 className="text-2xl font-bold text-gray-700 mb-3 animate-pulse">
            ...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
