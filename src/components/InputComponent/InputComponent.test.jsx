import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputComponent } from '.';

describe('<InputComponent />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <InputComponent placeholder="Something" name="test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
