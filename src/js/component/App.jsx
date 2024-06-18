import React from 'react';
import Cards from './Cards';
import Images from './Images';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
            <Navbar />
            <Home />
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Cards imageSrc={Images} /> {/* Pass the Images component as a prop */}
                <Cards imageSrc={Images} /> {/* You can pass the same Images component or different */}
                <Cards imageSrc={Images} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
