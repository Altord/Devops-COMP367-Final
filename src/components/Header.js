import React from 'react';
import ThemeSelector from './ThemeSelector'; 
function Header({ onThemeChange }) {
  return (
    <header style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>My Portfolio</h1>
      <ThemeSelector onThemeChange={onThemeChange} />
    </header>
  );
}

export default Header;
