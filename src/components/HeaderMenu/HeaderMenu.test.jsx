import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HeaderMenu } from '.';

describe('<HeaderMenu />', () => {
  it('should render', () => {
    const { container } = renderTheme(<HeaderMenu />);
    expect(container).toMatchSnapshot();
  });
});
