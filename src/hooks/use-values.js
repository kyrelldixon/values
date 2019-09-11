import { useState } from 'react';

const useValues = (defaultValues = []) => {
  const [values, setValues] = useState(defaultValues);

  const toggleValue = (id) => {
    setValues(
      values.map(
        (value, i) =>
        i === id ? {
          ...value,
          isCore: !value.isCore
        } : value
      )
    );
  };

  return [
    values,
    {
      toggleValue,
    }
  ];
};

export default useValues;