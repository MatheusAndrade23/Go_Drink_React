import P from 'prop-types';
import * as Styled from './styles';

export const Home = ({ children }) => {
  return <Styled.HomeContainer>{children}</Styled.HomeContainer>;
};

Home.propTypes = {
  children: P.node.isRequired,
};
