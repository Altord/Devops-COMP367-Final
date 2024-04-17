import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function PortfolioList() {
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

  return (
    <>
      <form onSubmit={addPortfolio} style={{ padding: '20px' }}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={newPortfolio.title}
          onChange={e => setNewPortfolio({ ...newPortfolio, title: e.target.value })}
          required
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={newPortfolio.description}
          onChange={e => setNewPortfolio({ ...newPortfolio, description: e.target.value })}
          required
        />
        <input
          name="image"
          type="url"
          placeholder="Image URL"
          value={newPortfolio.image}
          onChange={e => setNewPortfolio({ ...newPortfolio, image: e.target.value })}
          required
        />
        <input
          name="link"
          type="url"
          placeholder="Project Link"
          value={newPortfolio.link}
          onChange={e => setNewPortfolio({ ...newPortfolio, link: e.target.value })}
          required
        />
        <button type="submit">Add Portfolio Item</button>
      </form>
      {portfolios.length > 0 && (
        <ImageGallery items={portfolios} />
      )}
    </>
  );
}

export default PortfolioList;
