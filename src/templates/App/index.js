import { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';

import { DarkTheme } from '../../styles/theme/DarkTheme.js';
import { LightTheme } from '../../styles/theme/LightTheme.js';

function App() {
  const [theme, setTheme] = useState('dark');

  const ThemeSwitcherContext = createContext(undefined);

  const ThemeSwitcher = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeSwitcherContext.Provider value={ThemeSwitcher}>
      <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme}>
        <Router>
          <Switch>
            <Route path="/um" element={<p>1</p>} />
            <Route path="/dois" element={<p>2</p>} />
          </Switch>
        </Router>
        <GlobalStyles />
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
}

export default App;
