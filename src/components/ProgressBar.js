import React from 'react';

const ProgressBar = () => (
  <div className="flex flex-col justify-between w-1/2">
    <div className="w-full h-1 bg-gray-200 mb-1">
      <div className="w-1/3 h-full bg-orange-400"></div>
    </div>
    <div className="flex justify-between w-full text-sm">
      <small className="text-green-400">50 left</small>
      <small className="text-gray-500">
        <span className="text-green-400">0</span>/<span className="text-red-400">0</span>
      </small>
    </div>
  </div>
);

export default ProgressBar;