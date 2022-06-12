import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ErrorComponent } from '.';

describe('<ErrorComponent />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <ErrorComponent code="404" message="Not Found" />,
    );
    expect(container).toMatchSnapshot();
  });
});
