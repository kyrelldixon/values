import React from 'react';

const Values = ({ values, toggleValue }) => {

  return (
    <ul className="flex flex-col mb-4">
      { values.map((value, index) => <ValueCard key={value.name} value={value} id={index} toggleValue={toggleValue} />) }
    </ul>
  );
}

const ValueCard = ({ value, toggleValue, id }) => {
  const getValueStatus = (value) => {
    if (value.isCore === null) {
      return "Undecided";
    } else if (value.isCore) {
      return "Core"
    } else {
      return "Non Core"
    }
  }

  return (
    <li className="text-center border-2 border-gray-400 px-4 py-12 mt-2">
      <div>
        <p>{value.name}</p>
        <p onClick={() => toggleValue(id)}>{getValueStatus(value)}</p>
      </div>
    </li>
  );
}


export default Values;