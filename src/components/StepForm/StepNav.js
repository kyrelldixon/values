import React from 'react';

const StepNav = ({ currentStep }) => (
  <nav className="flex justify-around my-4">
    <StepButton active={currentStep === 1}>
      Sort Values
    </StepButton>
    <StepButton active={currentStep === 2}>
      Your Top 10
    </StepButton>
  </nav>
);

const StepButton = ({ active, children }) => {
  const activeClass = "bg-purple-200 border-purple-600";
  const inactiveClass = "border-gray-300"
  const className = `w-1/2 font-medium py-1 px-6 rounded-full border-2 ${active ? activeClass : inactiveClass}`;
  
  return (
    <button className={className}>
      { children }
    </button>
  );
}

export default StepNav;