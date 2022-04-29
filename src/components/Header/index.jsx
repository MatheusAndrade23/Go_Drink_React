import P from 'prop-types';
import * as Styled from './styles';

import { FaSearch } from 'react-icons/fa';

import Config from '../../config';

import { InputComponent } from '../InputComponent';
import { ButtonComponent } from '../ButtonComponent';
import { SmallContainer } from '../SmallContainer';
import { LinkComponent } from '../LinkComponent';
import { HeaderMenu } from '../HeaderMenu';
import { Logo } from '../Logo';

export const Header = () => {
  const SearchInput = (e) => {
    console.log(e.target.value);
  };

  const SearchSubmit = () => {
    console.log('Clicked');
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
