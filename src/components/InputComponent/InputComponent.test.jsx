import { screen } from '@testing-library/react';
import { renderTheme } from '../../tests/render-base.js';
import { InputComponent } from '.';

describe('<InputComponent />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <InputComponent placeholder="Something" name="test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
