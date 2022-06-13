import { screen } from '@testing-library/react';
import { renderTheme } from '../../tests/render-base.js';
import { ThemeProvider } from 'styled-components';
import { ButtonComponent } from '.';
import { DarkTheme as theme } from '../../styles/theme/DarkTheme';

describe('<ButtonComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<ButtonComponent>Text</ButtonComponent>);
    const buttonComponent = screen.getByRole('button', {
      name: 'Text',
    });

    expect(buttonComponent).toHaveStyle({
      color: theme.colors.thirdColor,
      'font-size': theme.fonts.sizes.small,
      'text-transform': 'none',
      'font-weight': 'bold',
    });
  });

  it('should render correct ButtonComponent sizes', () => {
    const { rerender } = renderTheme(
      <ButtonComponent size="medium">Text</ButtonComponent>,
    );
    const buttonComponent = screen.getByRole('button', {
      name: 'Text',
    });

    expect(buttonComponent).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <ButtonComponent size="xsmall">Text</ButtonComponent>
      </ThemeProvider>,
    );

    expect(screen.getByRole('button', { name: 'Text' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<ButtonComponent uppercase={true}>Text</ButtonComponent>);
    const buttonComponent = screen.getByRole('button', {
      name: 'Text',
    });

    expect(buttonComponent).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
});
