import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-12 text-center flex flex-col items-center">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Generating Quiz...</h3>
      <p className="text-gray-500">Our AI is crafting unique questions for you.</p>
    </div>
  );
};