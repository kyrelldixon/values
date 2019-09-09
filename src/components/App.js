import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Layout from './Layout';
import Container from './Container';

const mockValues = [
  'Authenticity',
  'Adventure',
  'Achievement',
  'Authority',
];

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
