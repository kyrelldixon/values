import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Layout from './Layout';
import Container from './Container';
import Footer from './Footer';

import useValues from '../hooks/use-values';

import allValues from '../values.json';

const App = () => {
  const [ values, { toggleValue } ] = useValues(allValues);
  
  return (
    <Layout>
      <Header />
      <Container>
        <Nav />
        <Values values={values} toggleValue={toggleValue} />
      </Container>
      <Footer values={values} />
    </Layout>
  );
}

export default App;
