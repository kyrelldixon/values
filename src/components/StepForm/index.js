import React, { useState } from 'react';
import StepNav from './StepNav';
import Container from '../Container';
import FormProgress from './FormProgress';

import Step1 from './Step1';
import Step2 from './Step2';

const StepForm = ({ values, toggleValue }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }
  
  const renderStep = () => {
    return step === 1 ? 
      <Step1 values={values} toggleValue={toggleValue} /> : 
      <Step2 />
  }

  return (
    <Container>
      <StepNav setStep={setStep} currentStep={step} />
      <form className="mx-auto max-w-md">
        { renderStep() }
      </form>
      <FormProgress currentStep={step} nextStep={nextStep} values={values} />
    </Container>
  );
}


export default StepForm;