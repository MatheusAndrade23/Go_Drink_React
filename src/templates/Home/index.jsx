import P from 'prop-types';
import * as Styled from './styles';

import { Header } from '../../components/Header';

export const Home = () => {
  return (
    <Styled.HomeContainer>
      <Header />
    </Styled.HomeContainer>
  );
};

Home.propTypes = {};
