import React from 'react';
import Nav from '../Nav';
import Container from '../Container';
import Step1 from './Step1';

const StepForm = ({ values, toggleValue }) => (
  <Container>
    <Nav />
    <form className="mx-auto max-w-md">
      <Step1 values={values} toggleValue={toggleValue} />
    </form>
  </Container>
);

export default StepForm;