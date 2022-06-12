import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Loading } from '.';

describe('<Loading />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
