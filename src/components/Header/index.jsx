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
import { MessageComponent } from '../MessageComponent';
import { HeaderMenu } from '../HeaderMenu';
import { Logo } from '../Logo';

export const Header = () => {
  const { search } = useParams();
  const [url, setUrl] = useState(null);
  const [message, setMessage] = useState(null);

  const SearchInput = (e) => {
    setUrl(e.target.value);
  };

  const SearchSubmit = () => {
    if (url) {
      window.location.href = `/search/${url}`;
    } else {
      setMessage('Please type something to search!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  useEffect(() => {
    const enterPressed = (e) => {
      if (e.key === 'Enter' && url) {
        window.location.href = `/search/${url}`;
      }
    };

    window.addEventListener('keydown', (e) => {
      enterPressed(e);
    });

    return () => {
      window.removeEventListener('keydown', (e) => {
        enterPressed(e);
      });
    };
  }, [search, url]);

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
      {message && <MessageComponent message={message} />}
    </>
  );
};
