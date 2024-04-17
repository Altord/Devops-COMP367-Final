import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function PortfolioList({ theme }) {
  const [portfolios, setPortfolios] = useState(() => {
    const saved = localStorage.getItem('portfolios');
    return saved ? JSON.parse(saved) : [];
  });

  const [newPortfolio, setNewPortfolio] = useState({
    title: '',
    description: '',
    image: '',
    link: '',
  });

  useEffect(() => {
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
  }, [portfolios]);

  const addPortfolio = (event) => {
    event.preventDefault();
    if (newPortfolio.title && newPortfolio.image && newPortfolio.link) {
      const newPortfolios = [...portfolios, {
        ...newPortfolio,
        original: newPortfolio.image,
        thumbnail: newPortfolio.image
      }];
      setPortfolios(newPortfolios);
      setNewPortfolio({ title: '', description: '', image: '', link: '' });
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px',
    ...theme.inputStyle,
  };

  const inputStyle = {
    padding: '10px',
    margin: '0 5px',
    ...theme.inputStyle,
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    ...theme.buttonStyle,
  };

  return (
    <>
      <form onSubmit={addPortfolio} style={formStyle}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={newPortfolio.title}
          onChange={e => setNewPortfolio({ ...newPortfolio, title: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={newPortfolio.description}
          onChange={e => setNewPortfolio({ ...newPortfolio, description: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          name="image"
          type="url"
          placeholder="Image URL"
          value={newPortfolio.image}
          onChange={e => setNewPortfolio({ ...newPortfolio, image: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          name="link"
          type="url"
          placeholder="Project Link"
          value={newPortfolio.link}
          onChange={e => setNewPortfolio({ ...newPortfolio, link: e.target.value })}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Portfolio Item</button>
      </form>
      {portfolios.length > 0 && (
        <ImageGallery items={portfolios} />
      )}
    </>
  );
}

export default PortfolioList;
