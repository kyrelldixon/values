import React from 'react';
import StepNav from './StepNav';
import Container from '../Container';
import FormProgress from './FormProgress';
import Modal from '../Modal';
import ModalFinish from '../ModalFinish';

import Step1 from './Step1';
import Step2 from './Step2';

import useStepForm from '../../hooks/use-step-form';
import useTogglable from '../../hooks/use-togglable';

const StepForm = ({ values, toggleValue }) => {
  const [step, { goToStep }] = useStepForm(1);
  const [modalOpen, openModal, closeModal] = useTogglable(false);
  
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
        openModal={openModal}
      />
      <Modal open={modalOpen} closeModal={closeModal}>
        <ModalFinish />
      </Modal>
    </Container>
  );
}


export default StepForm;