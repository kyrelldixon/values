import React from 'react';

const Values = ({ values }) => (
  <ul className="flex flex-col">
    { values.map(value => <ValueCard key={value} value={value} />) }
  </ul>
);

const ValueCard = ({ value }) => (
  <li className="text-center border-2 border-gray-400 px-4 py-12 mt-2">{value}</li>
);

export default Values;