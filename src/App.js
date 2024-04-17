import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PortfolioList from './components/Portfolio/PortfolioList';
import 'react-image-gallery/styles/css/image-gallery.css';

// Define your themes
const themes = {
  default: {
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: 'Arial, sans-serif',
    inputStyle: {
      color: '#000',
      backgroundColor: '#fff',
      borderColor: '#000',
    },
    buttonStyle: {
      color: '#fff',
      backgroundColor: '#000',
    },
  },
  dark: {
    backgroundColor: '#333',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    inputStyle: {
      color: '#fff',
      backgroundColor: '#555',
      borderColor: '#777',
    },
    buttonStyle: {
      color: '#000',
      backgroundColor: '#fff',
    },
  },
  lightBlue: {
    backgroundColor: '#ccf2ff',
    color: '#005f6b',
    fontFamily: 'Verdana, sans-serif',
    inputStyle: {
      color: '#005f6b',
      backgroundColor: '#ccf2ff',
      borderColor: '#007f9b',
    },
    buttonStyle: {
      color: '#fff',
      backgroundColor: '#007f9b',
    },
  },
  warm: {
    backgroundColor: '#f5e9dc',
    color: '#865439',
    fontFamily: 'Georgia, serif',
    inputStyle: {
      color: '#865439',
      backgroundColor: '#f5e9dc',
      borderColor: '#a97155',
    },
    buttonStyle: {
      color: '#f5e9dc',
      backgroundColor: '#a97155',
    },
  },
  cool: {
    backgroundColor: '#e0f1f5',
    color: '#4a707a',
    fontFamily: 'Trebuchet MS, sans-serif',
    inputStyle: {
      color: '#4a707a',
      backgroundColor: '#e0f1f5',
      borderColor: '#5a8594',
    },
    buttonStyle: {
      color: '#e0f1f5',
      backgroundColor: '#5a8594',
    },
  },
  retro: {
    backgroundColor: '#f4f4f4',
    color: '#d9b382',
    fontFamily: 'Courier New, monospace',
    inputStyle: {
      color: '#d9b382',
      backgroundColor: '#f4f4f4',
      borderColor: '#d9b382',
    },
    buttonStyle: {
      color: '#d9b382',
      backgroundColor: '#8c8c8c',
    },
  },
};


function App() {
  // State for the theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : themes.default;
  });

  // Effect to save theme changes to localStorage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    // Apply the theme to the body of the document
    const bodyStyle = document.body.style;
    bodyStyle.backgroundColor = theme.backgroundColor;
    bodyStyle.color = theme.color;
    bodyStyle.fontFamily = theme.fontFamily;
  }, [theme]);

  // Function to handle theme changes
  const handleThemeChange = (selectedTheme) => {
    setTheme(themes[selectedTheme]);
  };

  return (
    <div className="App">
      <Header onThemeChange={handleThemeChange} />
      <PortfolioList theme={theme} />
    </div>
  );
}

export default App;
