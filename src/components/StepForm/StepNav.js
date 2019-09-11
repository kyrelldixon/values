import React from 'react';

const StepNav = ({ currentStep, goToStep }) => (
  <nav className="flex justify-around my-4">
    <StepButton
      active={currentStep === 1}
      goToStep={goToStep(1)}
    >
      Sort Values
    </StepButton>
    <StepButton
      active={currentStep === 2}
      goToStep={goToStep(2)}
    >
      Your Top 10
    </StepButton>
  </nav>
);

const StepButton = ({ active, children, goToStep }) => {
  const activeClass = "bg-purple-200 border-purple-600";
  const inactiveClass = "border-gray-300"
  const className = `w-1/2 font-medium py-1 px-6 rounded-full border-2 ${active ? activeClass : inactiveClass}`;
  
  return (
    <button
      className={className}
      onClick={goToStep}
    >
      { children }
    </button>
  );
}

export default StepNav;