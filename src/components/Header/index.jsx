import * as Styled from './styles';

import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { AuthContext } from '../../providers/AuthProvider/index';

import Config from '../../config';

import { Logo } from '../Logo';
import { HeaderMenu } from '../HeaderMenu';
import { LinkComponent } from '../LinkComponent';
import { SmallContainer } from '../SmallContainer';
import { InputComponent } from '../InputComponent';
import { ButtonComponent } from '../ButtonComponent';
import { MessageComponent } from '../MessageComponent';

export const Header = () => {
  const { user } = useContext(AuthContext);
  const { search } = useParams();
  const navigate = useNavigate();

  const [url, setUrl] = useState('');
  const [message, setMessage] = useState(null);

  const SearchInput = (e) => {
    setUrl(e.target.value);
  };

  const SearchSubmit = () => {
    if (url) {
      navigate(`/search/${url}`);
    } else {
      setMessage('Please type something to search!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  useEffect(() => {
    const enterPressed = (e) => {
      if (e.key === 'Enter' && url.length > 0) {
        navigate(`/search/${url}`);
      } else if (url.length < 0) {
        setMessage('Please type something to search!');
        setTimeout(() => {
          setMessage(null);
        }, 3000);
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
  }, [navigate, search, url]);

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
          {user.isLogged ? (
            <LinkComponent link="/login/signout">Sign Out</LinkComponent>
          ) : (
            <LinkComponent link="/login/signin">Sign In</LinkComponent>
          )}
        </SmallContainer>
      </Styled.Header>
      <HeaderMenu />
      {message && <MessageComponent message={message} />}
    </>
  );
};
