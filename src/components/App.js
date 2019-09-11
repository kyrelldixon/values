import React from 'react';
import Header from './Header';
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
      <StepForm values={values} toggleValue={toggleValue} />
      <Footer values={values} />
    </Layout>
  );
}

export default App;
