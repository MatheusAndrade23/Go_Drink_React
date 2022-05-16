import * as Styled from './styles';

import { useContext } from 'react';

import { ThemeSwitcherContext } from '../../providers/ThemeProvider/index';

export const ThemeSwitcher = () => {
  const { themeSwitcher, theme } = useContext(ThemeSwitcherContext);

  return (
    <Styled.Container onClick={themeSwitcher}>
      {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    </Styled.Container>
  );
};
