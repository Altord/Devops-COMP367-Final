import React, { useState } from 'react';

function PortfolioItem({ portfolio }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <img 
        src={portfolio.image} 
        alt={portfolio.title} 
        style={{ width: '100px', height: '100px' }} 
        onClick={toggleModal}
      />
      <h2>{portfolio.title}</h2>
      <p>{portfolio.description}</p>
      <a href={portfolio.link} target="_blank" rel="noopener noreferrer">View Project</a>
      
      {isModalOpen && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 100 }}>
          <h2>{portfolio.title}</h2>
          <img src={portfolio.image} alt={portfolio.title} style={{ maxWidth: '100%' }} />
          <p>{portfolio.description}</p>
          <button onClick={toggleModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default PortfolioItem;
