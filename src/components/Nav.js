import React from 'react';

const Nav = () => (
  <nav className="flex justify-around my-4">
    <button className="w-1/2 bg-purple-200 font-medium py-1 px-8 rounded-full border-2 border-purple-600">
      Sort Values
    </button>
    <button className="w-1/2 font-medium py-1 px-8 rounded-full border-2 border-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white">
      Your Top 10
    </button>
  </nav>
);

export default Nav;