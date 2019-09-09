import React from 'react';

const Values = ({ values }) => (
  <ul>
    { values.map(value => <li key={value}>{value}</li>) }
  </ul>
);

export default Values;