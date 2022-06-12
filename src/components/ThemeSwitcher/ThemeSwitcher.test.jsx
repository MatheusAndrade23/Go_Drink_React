import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ThemeSwitcher } from '.';

describe('<ThemeSwitcher />', () => {
  it('should render', () => {
    const { container } = renderTheme(<ThemeSwitcher />);
    expect(container).toMatchSnapshot();
  });
});
