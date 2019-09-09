import React from 'react';
import Header from './Header';
import Nav from './Nav';

const values = [
  'Authenticity',
  'Adventure',
  'Achievement',
  'Authority',
]

const App = () => (
  <section>
    <Header />
    <Nav />
    <section>
      <ul>
        { values.map(value => <li key={value}>{value}</li>) }
      </ul>
    </section>
  </section>
)

export default App;
