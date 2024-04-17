import React from 'react';

function ThemeSelector({ onThemeChange }) {
    return (
      <select onChange={(e) => onThemeChange(e.target.value)} defaultValue="default">
        <option value="default">Default</option>
        <option value="dark">Dark</option>
        <option value="lightBlue">Light Blue</option>
        <option value="warm">Warm</option>
        <option value="cool">Cool</option>
        <option value="retro">Retro</option>
      </select>
    );
  }
  

export default ThemeSelector;
