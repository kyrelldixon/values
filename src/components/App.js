import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Layout from './Layout';

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
      <Header />
      <Nav />
      <Values values={values} />
    </Layout>
  );
}

export default App;
