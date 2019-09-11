import React from 'react';
import ProgressBar from '../ProgressBar';

const FormProgress = ({ values, goToStep2, currentStep }) => {
  const itemsLeft = values.filter(value => value.isCore === null);
  const coreValues = values.filter(value => value.isCore);
  const isDisabled = coreValues.length < 3;
  
  return (
    <div className="flex justify-between text-sm fixed left-0 bottom-0 bg-white w-full border-t-2 border-gray-400 px-6 py-4 md:hidden">
      <ProgressBar
        coreCount={coreValues.length}
        totalItems={values.length}
        itemsLeft={itemsLeft.length}
      />
      <button className="bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium p-2 rounded" 
        disabled={isDisabled}
        onClick={goToStep2}
      >
        { currentStep > 1 ? "Finish" : "Your Top 10" }
      </button>
    </div>
  );
}

export default FormProgress;