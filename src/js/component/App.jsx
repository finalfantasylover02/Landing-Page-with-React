import React from 'react';
import Cards from './Cards';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Cards />
        <Cards />
        <Cards/>
        <div>
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
