import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

import { Header } from '../../components/Header';
import { DrinkComponent } from '../../components/DrinkComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Loading } from '../../components/Loading';
import { ErrorComponent } from '../../components/ErrorComponent';
import { TextComponent } from '../../components/TextComponent';
import { LinkComponent } from '../../components/LinkComponent';
import { RandomDrinkComponent } from '../../components/RandomDrinkComponent';

import config from '../../config';

export const Home = () => {
  return (
    <>
      <Header />
      <Styled.HomeContainer>
        <Styled.Title>Welcome to GoDrink</Styled.Title>
        <TextComponent>
          An open source website with over 600 different cocktails recipes.
        </TextComponent>
        <Styled.RandomDrinks>
          <RandomDrinkComponent />
          <RandomDrinkComponent />
          <RandomDrinkComponent />
          <RandomDrinkComponent />
          <RandomDrinkComponent />
          <RandomDrinkComponent />
          <RandomDrinkComponent />
          <RandomDrinkComponent />
        </Styled.RandomDrinks>
      </Styled.HomeContainer>
    </>
  );
};
