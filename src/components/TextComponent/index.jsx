import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children, uppercase = false }) => {
  return <Styled.Text uppercase={uppercase}>{children}</Styled.Text>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  uppercase: P.bool,
};
