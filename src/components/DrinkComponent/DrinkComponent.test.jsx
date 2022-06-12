import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { DrinkComponent } from '.';
import popularDrinks from '../../templates/Home/popular-drinks';

describe('<DrinkComponent />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <DrinkComponent drink={popularDrinks.drinks[1]} />,
    );
    expect(container).toMatchSnapshot();
  });
});
