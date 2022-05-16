import P from 'prop-types';

import { createContext, useState } from 'react';

import { ThemeProvider as ThemeStyledProvider } from 'styled-components';

import { GlobalStyles } from '../../styles/global-styles';

import { DarkTheme } from '../../styles/theme/DarkTheme.js';
import { LightTheme } from '../../styles/theme/LightTheme.js';

export const ThemeSwitcherContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const themeSwitcher = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
    console.log('Changed theme!');
  };

  return (
    <ThemeStyledProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
      <ThemeSwitcherContext.Provider value={{ themeSwitcher, theme }}>
        {children}
      </ThemeSwitcherContext.Provider>
      <GlobalStyles />
    </ThemeStyledProvider>
  );
};

ThemeProvider.propTypes = {
  children: P.node.isRequired,
};
