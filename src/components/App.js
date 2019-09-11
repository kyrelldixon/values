import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Layout from './Layout';
import Container from './Container';
import Footer from './Footer';

import { ValuesProvider } from '../context/ValuesContext';
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
      <ValuesProvider value={values}>
        <Header />
        <Container>
          <Nav />
          <Values updateValue={updateValue} />
        </Container>
        <Footer />
      </ValuesProvider>
    </Layout>
  );
}

export default App;
