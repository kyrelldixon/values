import React from 'react';

const Footer = () => (
  <footer className="flex justify-between text-sm fixed left-0 bottom-0 bg-white w-full border-t-2 border-gray-400 px-6 py-4">
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
    <button className="bg-purple-600 opacity-50 cursor-not-allowed text-white font-medium p-2 rounded">Your Top 10</button>
  </footer>
);

export default Footer;