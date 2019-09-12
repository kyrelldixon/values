import { useState } from 'react';

const useTogglable = (initialState = false) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggleOn = () => setIsOn(true);
  const toggleOff = () => setIsOn(false);
  const toggle = () => setIsOn(!isOn);

  return [
    isOn,
    toggleOn,
    toggleOff,
    toggle,
  ];
}

export default useTogglable;