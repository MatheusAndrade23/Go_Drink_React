import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

import { Header } from '../../components/Header';
import { DrinkComponent } from '../../components/DrinkComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { Loading } from '../../components/Loading';
import { ErrorComponent } from '../../components/ErrorComponent';

import config from '../../config';

export const Home = () => {
  return (
    <>
      <Header />
    </>
  );
};
