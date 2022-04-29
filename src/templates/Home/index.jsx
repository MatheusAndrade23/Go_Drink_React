import P from 'prop-types';
import * as Styled from './styles';

import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';

export const Home = () => {
  useEffect(() => {}, []);

  return (
    <Styled.HomeContainer>
      <Header />
    </Styled.HomeContainer>
  );
};

Home.propTypes = {};
