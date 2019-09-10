import React from 'react';
import ProgressBar from './ProgressBar';

const Footer = () => (
  <footer className="flex justify-between text-sm fixed left-0 bottom-0 bg-white w-full border-t-2 border-gray-400 px-6 py-4 md:hidden">
    <ProgressBar totalItems={50} itemsLeft={10} />
    <button className="bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium p-2 rounded" disabled>Your Top 10</button>
  </footer>
);

export default Footer;