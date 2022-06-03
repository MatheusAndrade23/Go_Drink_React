import * as Styled from './styles';

import { useContext } from 'react';

import { ThemeSwitcherContext } from '../../providers/ThemeProvider/index';

export const ThemeSwitcher = () => {
  const { themeSwitcher, theme } = useContext(ThemeSwitcherContext);
  const text = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;

  return (
    <Styled.Container onClick={themeSwitcher} title={text}>
      {text}
    </Styled.Container>
  );
};
