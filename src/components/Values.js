import React, { useContext } from 'react';
import ValuesContext from '../context/ValuesContext';

const Values = () => {
  const values = useContext(ValuesContext);

  return (
    <ul className="flex flex-col mb-4">
      { values.map(value => <ValueCard key={value} value={value} />) }
    </ul>
  );
}


const ValueCard = ({ value }) => (
  <li className="text-center border-2 border-gray-400 px-4 py-12 mt-2">{value}</li>
);

export default Values;