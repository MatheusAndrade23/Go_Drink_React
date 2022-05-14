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
    if (action !== 'signIn' && action !== 'signUp') {
      navigate('/');
    } else {
      setLoginControl(action);
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
          {loginControl === 'signIn' ? 'Sign In' : 'Sign Up'}
        </ButtonComponent>
        <SmallContainer disposition="row">
          <TextComponent>Not have an account yet?</TextComponent>
          <LinkComponent
            link={loginControl !== 'signIn' ? '/login/signIn' : '/login/signUp'}
          >
            {loginControl !== 'signIn' ? 'Sign In' : 'Sign Up'}
          </LinkComponent>
        </SmallContainer>
      </Styled.Login>
    </Styled.Container>
  );
};
