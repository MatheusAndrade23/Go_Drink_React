import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { RandomDrinkComponent } from '.';

describe('<RandomDrinkComponent />', () => {
  it('should render', () => {
    const { container } = renderTheme(<RandomDrinkComponent />);
    expect(container).toMatchSnapshot();
  });
});
