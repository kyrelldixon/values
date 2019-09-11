import React, { useState } from 'react';
import Nav from '../Nav';
import Container from '../Container';
import Step1 from './Step1';
import Step2 from './Step2';

const StepForm = ({ values, toggleValue }) => {
  const [step] = useState(1);
  
  const renderStep = () => {
    return step === 1 ? 
      <Step1 values={values} toggleValue={toggleValue} /> : 
      <Step2 />
  }

  return (
    <Container>
      <Nav />
      <form className="mx-auto max-w-md">
        { renderStep() }
      </form>
    </Container>
  );
}


export default StepForm;