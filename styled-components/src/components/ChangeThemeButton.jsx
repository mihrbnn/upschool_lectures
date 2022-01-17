import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ChangeThemeButton() {
  const { setThemeName, theme, themeName } = useContext(ThemeContext);

  return (
    <button
      className={`btn ${theme.button}`}
      onClick={() =>
        setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'))
      }
    >
      Change Theme-{`${themeName}`}
    </button>
  );
}
export default ChangeThemeButton;
