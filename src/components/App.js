import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';
import Section from './Section';

const mockValues = [
  'Authenticity',
  'Adventure',
  'Achievement',
  'Authority',
]

const App = () => {
  const [values,] = useState(mockValues);

  return (
    <Section>
      <Header />
      <Nav />
      <Section>
        <Values values={values} />
      </Section>
    </Section>
  )
}


export default App;
