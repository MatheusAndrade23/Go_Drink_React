import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SmallContainer } from '.';

describe('<SmallContainer />', () => {
  it('should render with default values', () => {
    renderTheme(<SmallContainer>Texto</SmallContainer>);
    const SmallContainer = screen.getByRole('SmallContainer', {
      name: 'Texto',
    });

    expect(SmallContainer).toHaveStyle({
      'flex-direction': 'column',
    });
  });

  it('should render in a row', () => {
    renderTheme(<SmallContainer>Texto</SmallContainer>);
    const SmallContainer = screen.getByRole('SmallContainer', {
      name: 'Texto',
    });

    expect(SmallContainer).toHaveStyle({
      'flex-direction': 'row',
    });
  });
});
