import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Layout from './Layout';
import Footer from './Footer';
import StepForm from './StepForm';

import useValues from '../hooks/use-values';

import allValues from '../values.json';

const App = () => {
  const [ values, { toggleValue } ] = useValues(allValues);
  
  return (
    <Layout>
      <Header />
      <StepForm>
        <Nav />
        <Values values={values} toggleValue={toggleValue} />
      </StepForm>
      <Footer values={values} />
    </Layout>
  );
}

export default App;
