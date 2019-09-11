import React, { useContext } from 'react';
import ValuesContext from '../context/ValuesContext';

const Values = ({ updateValue }) => {
  const values = useContext(ValuesContext);

  return (
    <ul className="flex flex-col mb-4">
      { values.map((value, index) => <ValueCard key={value.name} value={value} id={index} updateValue={updateValue} />) }
    </ul>
  );
}


const ValueCard = ({ value, updateValue, id }) => (
  <li className="text-center border-2 border-gray-400 px-4 py-12 mt-2">
    <div>
      <p>{value.name}</p>
      <p onClick={() => updateValue(id)}>{value.isCore ? "Core" : "Non Core"}</p>
    </div>
  </li>
);

export default Values;