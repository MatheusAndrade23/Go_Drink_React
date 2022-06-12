import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LinkComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { DarkTheme as theme } from '../../styles/theme/DarkTheme';

describe('<LinkComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<LinkComponent>Texto</LinkComponent>);
    const LinkComponent = screen.getByRole('LinkComponent', { name: 'Texto' });

    expect(LinkComponent).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render correct LinkComponent sizes', () => {
    const { rerender } = renderTheme(
      <LinkComponent size="small">Texto</LinkComponent>,
    );
    const LinkComponent = screen.getByRole('LinkComponent', { name: 'Texto' });

    expect(LinkComponent).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <LinkComponent size="medium">Texto</LinkComponent>
      </ThemeProvider>,
    );

    expect(screen.getByRole('LinkComponent', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <LinkComponent size="xsmall">Texto</LinkComponent>
      </ThemeProvider>,
    );

    expect(screen.getByRole('LinkComponent', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xsmall,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<LinkComponent uppercase={true}>Texto</LinkComponent>);
    const LinkComponent = screen.getByRole('LinkComponent', { name: 'Texto' });

    expect(LinkComponent).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
});
