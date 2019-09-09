import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Values from './Values';

const mockValues = [
  'Authenticity',
  'Adventure',
  'Achievement',
  'Authority',
]

const App = () => {
  const [values,] = useState(mockValues);

  return (
    <section>
      <Header />
      <Nav />
      <section>
        <Values values={values} />
      </section>
    </section>
  )
}


export default App;
