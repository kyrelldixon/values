import React from 'react';
import ProgressBar from '../ProgressBar';
import Button from '../Button';
import Emoji from '../Emoji';

const FormProgress = ({ values, goToStep2, openModal, currentStep }) => {
  const itemsLeft = values.filter(value => value.isCore === null);
  const coreValues = values.filter(value => value.isCore);
  const isDisabled = coreValues.length < 3;

  const handleClick = () => {
    if (currentStep !== 2)
      goToStep2();
    else {
      openModal(); 
    }
  }

  const renderButtonInner = () => (
    currentStep === 2 ? 
      <>
        Finish <Emoji emojiName="hand pointing right" emoji="👉" />
      </>
      : 
      <>
        Your Top 10 <Emoji emojiName="hand pointing right" emoji="👉" />
      </>
  )
  
  return (
    <div className="text-sm fixed left-0 bottom-0 bg-white w-full border-t-2 border-gray-400 px-6 py-4">
      <div className="flex justify-between max-w-2xl mx-auto">
        <ProgressBar
          coreCount={coreValues.length}
          totalItems={values.length}
          itemsLeft={itemsLeft.length}
        />
        <Button
          primary
          disabled={isDisabled}
          onClick={handleClick}
        >
          { renderButtonInner() }
        </Button>
      </div>
    </div>
  );
}

export default FormProgress;