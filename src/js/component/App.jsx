import React from 'react';
import Cards from './Cards';
import Home from './Home';

function App() {
  return (
    <div>
      <Home />
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cards />
        <Cards />
        <Cards/>
      </div>
    </div>
  );
}

export default App;
