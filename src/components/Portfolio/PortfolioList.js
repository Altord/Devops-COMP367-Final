import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import Modal from '../Modal'; 
import "react-image-gallery/styles/css/image-gallery.css";

function PortfolioList({ theme }) {
  const [portfolios, setPortfolios] = useState(() => {
    const saved = localStorage.getItem('portfolios');
    const initialValue = saved ? JSON.parse(saved) : [];
    return initialValue;
  });

  const [newPortfolio, setNewPortfolio] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
  }, [portfolios]);

  const addPortfolio = (event) => {
    event.preventDefault();
    if (newPortfolio.title && newPortfolio.image && newPortfolio.link) {
      setPortfolios([...portfolios, newPortfolio]);
      setNewPortfolio({ title: '', description: '', image: '', link: '' }); 
    }
  };

  const openModal = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const galleryImages = portfolios.map(portfolio => ({
    ...portfolio,
    original: portfolio.image,
    thumbnail: portfolio.image,
    description: portfolio.description,
    renderItem: () => (
      <div onClick={() => openModal(portfolio)}>
        <img src={portfolio.image} alt={portfolio.title} />
        {portfolio.description && (
          <span className="image-gallery-description" style={{ color: theme.color }}>
            {portfolio.description}
          </span>
        )}
      </div>
    )
  }));

  return (
    <>
      <form onSubmit={addPortfolio} style={formStyle(theme)}>
        <input
          type="text"
          placeholder="Title"
          value={newPortfolio.title}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, title: e.target.value })}
          required
          style={inputStyle(theme)}
        />
        <input
          type="text"
          placeholder="Description"
          value={newPortfolio.description}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, description: e.target.value })}
          required
          style={inputStyle(theme)}
        />
        <input
          type="url"
          placeholder="Image URL"
          value={newPortfolio.image}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, image: e.target.value })}
          required
          style={inputStyle(theme)}
        />
        <input
          type="url"
          placeholder="Project Link"
          value={newPortfolio.link}
          onChange={(e) => setNewPortfolio({ ...newPortfolio, link: e.target.value })}
          required
          style={inputStyle(theme)}
        />
        <button type="submit" style={buttonStyle(theme)}>Add Portfolio Item</button>
      </form>
      {portfolios.length > 0 && (
        <ImageGallery
          items={galleryImages}
          startIndex={currentIndex} 
          onSlide={setCurrentIndex} 
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          additionalClass="custom-gallery"
        />
      )}
      {isModalOpen && selectedPortfolio && (
        <Modal portfolio={selectedPortfolio} onClose={closeModal} theme={theme} />
      )}
    </>
  );
}

function formStyle(theme) {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px',
    ...theme.inputStyle,
  };
}

function inputStyle(theme) {
  return {
    padding: '10px',
    margin: '0 5px',
    ...theme.inputStyle,
  };
}

function buttonStyle(theme) {
  return {
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    ...theme.buttonStyle,
  };
}

export default PortfolioList;
