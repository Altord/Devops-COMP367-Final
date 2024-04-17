import React, { useState } from 'react';
import Header from './components/Header';
import PortfolioList from './components/Portfolio/PortfolioList';
import 'react-image-gallery/styles/css/image-gallery.css';

function App() {
  const [portfolios, setPortfolios] = useState([
    
  ]);

  return (
    <div className="App">
      <Header />
      <PortfolioList portfolios={portfolios} />
    </div>
  );
}

export default App;
