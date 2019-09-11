import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Layout from './Layout';
import Container from './Container';
import Footer from './Footer';

import allValues from '../values.json';

const App = () => {
  const [ values, setValues ] = useState(allValues);
  
  const updateValue = (id) => {
    const updatedValues = values.map((value, i) => {
      if (i === id) {
        value.isCore = !value.isCore;
        return value;
      }
      return value;
    });

    setValues(updatedValues);
  }
  
  return (
    <Layout>
      <Header />
      <Container>
        <Nav />
        <Values values={values} updateValue={updateValue} />
      </Container>
      <Footer values={values} />
    </Layout>
  );
}

export default App;
