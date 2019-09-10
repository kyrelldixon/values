import React from 'react';

const ProgressBar = ({ totalItems, itemsLeft }) => {
  const progressPercent = (totalItems - itemsLeft) / totalItems * 100;

  return (
    <div className="flex flex-col justify-between w-1/2">
      <div className="w-full h-1 bg-gray-200 mb-1">
        <div className="h-full bg-orange-400" style={{ width: `${progressPercent}%`}}></div>
      </div>
      <div className="flex justify-between w-full text-sm">
        <small className="text-green-400">{itemsLeft} left</small>
        <small className="text-gray-500">
          <span className="text-green-400">0</span>/<span className="text-red-400">0</span>
        </small>
      </div>
    </div>
  );
}


export default ProgressBar;