import P from 'prop-types';
import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import Config from '../../config';

import { InputComponent } from '../InputComponent';
import { ButtonComponent } from '../ButtonComponent';
import { SmallContainer } from '../SmallContainer';
import { LinkComponent } from '../LinkComponent';
import { HeaderMenu } from '../HeaderMenu';
import { Logo } from '../Logo';

export const Header = () => {
  const { search } = useParams();
  const [url, setUrl] = useState('');

  const SearchInput = (e) => {
    setUrl(e.target.value);
  };

  const SearchSubmit = () => {
    window.location.href = `/search/${url}`;
  };

  return (
    <>
      <Styled.Header>
        <Logo text="GODRINK" />
        <SmallContainer disposition="row">
          <InputComponent
            type="text"
            handleChange={SearchInput}
            placeholder="Type here..."
            name="search"
          />
          <ButtonComponent handleSubmit={SearchSubmit} model="icon">
            <FaSearch />
          </ButtonComponent>
        </SmallContainer>
        <SmallContainer disposition="row">
          <LinkComponent link="/login">Sign In</LinkComponent>
        </SmallContainer>
      </Styled.Header>
      <HeaderMenu />
    </>
  );
};
