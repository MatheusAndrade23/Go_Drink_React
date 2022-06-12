import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

describe('<Header />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Header />);
    expect(container).toMatchSnapshot();
  });
});
