import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ThemeProvider } from 'styled-components';
import { ButtonComponent } from '.';
import { DarkTheme as theme } from '../../styles/theme/DarkTheme';

describe('<ButtonComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<ButtonComponent>Texto</ButtonComponent>);
    const ButtonComponent = screen.getByRole('ButtonComponent', {
      name: 'Texto',
    });

    expect(ButtonComponent).toHaveStyle({
      color: theme.colors.thirdColor,
      'font-size': theme.fonts.sizes.small,
      'text-transform': 'none',
      'font-weight': 'bold',
    });
  });

  it('should render correct ButtonComponent sizes', () => {
    const { rerender } = renderTheme(
      <ButtonComponent size="medium">Texto</ButtonComponent>,
    );
    const ButtonComponent = screen.getByRole('ButtonComponent', {
      name: 'Texto',
    });

    expect(ButtonComponent).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonComponent size="xsmall">Texto</ButtonComponent>
      </ThemeProvider>,
    );

    expect(screen.getByRole('ButtonComponent', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<ButtonComponent uppercase={true}>Texto</ButtonComponent>);
    const ButtonComponent = screen.getByRole('ButtonComponent', {
      name: 'Texto',
    });

    expect(ButtonComponent).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
});
