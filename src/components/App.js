import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';

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

const Layout = ({ children }) => (
  <section className="text-gray-900 pt-12 px-4">{children}</section>
)

export default App;
