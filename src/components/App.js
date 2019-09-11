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
  const [ values, ] = useState(allValues);
  
  return (
    <Layout>
      <ValuesProvider value={values}>
        <Header />
        <Container>
          <Nav />
          <Values />
        </Container>
        <Footer />
      </ValuesProvider>
    </Layout>
  );
}

export default App;
