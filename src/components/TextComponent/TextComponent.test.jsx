import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { DarkTheme as theme } from '../../styles/theme/DarkTheme';

describe('<TextComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    const TextComponent = screen.getByRole('TextComponent', { name: 'Texto' });

    expect(TextComponent).toHaveStyle({
      color: theme.colors.thirdColor,
      'font-size': theme.fonts.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render correct TextComponent sizes', () => {
    const { rerender } = renderTheme(
      <TextComponent size="small">Texto</TextComponent>,
    );
    const TextComponent = screen.getByRole('TextComponent', { name: 'Texto' });

    expect(TextComponent).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextComponent size="medium">Texto</TextComponent>
      </ThemeProvider>,
    );

    expect(screen.getByRole('TextComponent', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <TextComponent size="xsmall">Texto</TextComponent>
      </ThemeProvider>,
    );

    expect(screen.getByRole('TextComponent', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<TextComponent uppercase={true}>Texto</TextComponent>);
    const TextComponent = screen.getByRole('TextComponent', { name: 'Texto' });

    expect(TextComponent).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
});
