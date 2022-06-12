import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LanguageSwitcher } from '.';

describe('<LanguageSwitcher />', () => {
  it('should render', () => {
    const { container } = renderTheme(<LanguageSwitcher />);
    expect(container).toMatchSnapshot();
  });
});
