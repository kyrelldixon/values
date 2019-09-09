import React from 'react';

const values = [
  'Authenticity',
  'Adventure',
  'Achievement',
  'Authority',
]

const App = () => (
  <section>
    <header>
      <h1>Discover your 10 core values</h1>
      <p>It'll take less than 5 minutes</p>
    </header>
    <nav>
      <ul>
        <li>Sort Values</li>
        <li>Your Top 10</li>
      </ul>
    </nav>
    <section>
      <ul>
        { values.map(value => <li key={value}>{value}</li>) }
      </ul>
    </section>
  </section>
)

export default App;
