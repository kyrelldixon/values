import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Layout from './Layout';
import Container from './Container';

import mockValues from '../values.json';

const App = () => {
  const [values,] = useState(mockValues);

  return (
    <Layout>
      <Container>
        <Header />
        <Nav />
        <Values values={values} />
      </Container>
    </Layout>
  );
}

export default App;
