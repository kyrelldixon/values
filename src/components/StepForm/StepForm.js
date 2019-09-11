import React, { useState } from 'react';
import StepNav from './StepNav';
import Container from '../Container';
import FormProgress from './FormProgress';

import Step1 from './Step1';
import Step2 from './Step2';

const StepForm = ({ values, toggleValue }) => {
  const [step, setStep] = useState(1);

  const goToStep = step => () => setStep(step);
  
  const renderStep = () => {
    return step === 1 ? 
      <Step1 values={values} toggleValue={toggleValue} /> : 
      <Step2 />
  }

  return (
    <Container>
      <StepNav goToStep={goToStep} currentStep={step} />
      <form className="mx-auto max-w-md">
        { renderStep() }
      </form>
      <FormProgress
        currentStep={step}
        goToStep2={goToStep(2)}
        values={values}
      />
    </Container>
  );
}


export default StepForm;