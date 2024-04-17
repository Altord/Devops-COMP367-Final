import React from 'react';

function Modal({ portfolio, onClose, theme }) {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    fontFamily: theme.fontFamily,
    padding: '20px',
    zIndex: 1000,
    border: '1px solid',
    borderRadius: '8px',
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    }}>
      <div style={modalStyle}>
        <h2>{portfolio.title}</h2>
        <p>{portfolio.description}</p>
        <img src={portfolio.image} alt={portfolio.title} style={{ maxWidth: '100%', display: 'block' }} />
        <a href={portfolio.link} target="_blank" rel="noopener noreferrer">View Project</a>
        <button onClick={onClose} style={theme.buttonStyle}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
