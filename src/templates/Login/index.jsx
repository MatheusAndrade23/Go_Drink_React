import * as Styled from './styles';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { InputComponent } from '../../components/InputComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { SmallContainer } from '../../components/SmallContainer';
import { LinkComponent } from '../../components/LinkComponent';
import { TextComponent } from '../../components/TextComponent';
import { Heading } from '../../components/Heading';

export const Login = () => {
  const { action } = useParams();
  const navigate = useNavigate();

  const [loginControl, setLoginControl] = useState('signIn');
  const [userInfo, setUserInfo] = useState({});

  const handleLogin = (e) => {
    setUserInfo((userInfo) =>
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value }),
    );
  };

  useEffect(() => {
    const login = action.toLowerCase();
    if (login !== 'signin' && login !== 'signup') {
      navigate('/');
    } else {
      setLoginControl(login);
    }
  }, [action, navigate]);

  return (
    <Styled.Container>
      <Styled.Login>
        <Heading size="medium" as="h4">
          GODRINK
        </Heading>
        <InputComponent
          text="Email:"
          placeholder="Type your email here..."
          name="email"
          type="email"
          handleChange={handleLogin}
        />
        <InputComponent
          text="Password:"
          placeholder="Type your password here..."
          name="password"
          type="password"
          handleChange={handleLogin}
        />
        <ButtonComponent bold={false}>
          {loginControl === 'signin' ? 'Sign In' : 'Sign Up'}
        </ButtonComponent>
        <SmallContainer disposition="row">
          <TextComponent>Not have an account yet?</TextComponent>
          <LinkComponent
            link={loginControl !== 'signin' ? '/login/signin' : '/login/signup'}
          >
            {loginControl !== 'signin' ? 'Sign In' : 'Sign Up'}
          </LinkComponent>
        </SmallContainer>
      </Styled.Login>
    </Styled.Container>
  );
};
