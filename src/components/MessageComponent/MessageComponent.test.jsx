import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MessageComponent } from '.';

describe('<MessageComponent />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <MessageComponent message="Wrong Password" />,
    );
    expect(container).toMatchSnapshot();
  });
});
