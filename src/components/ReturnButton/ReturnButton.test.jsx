import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ReturnButton } from '.';

describe('<ReturnButton />', () => {
  it('should render', () => {
    const { container } = renderTheme(<ReturnButton />);
    expect(container).toMatchSnapshot();
  });
});
