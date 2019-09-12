import { useState } from 'react';

const useStepForm = (initialStep = 1) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);
  const goToStep = step => () => setStep(step);

  return [step, {
    nextStep,
    previousStep,
    goToStep,
  }];
}

export default useStepForm;