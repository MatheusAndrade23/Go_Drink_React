import * as Styled from './styles';

import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../providers/AuthProvider/index';

import { Heading } from '../../components/Heading';
import { ReturnButton } from '../../components/ReturnButton';
import { LinkComponent } from '../../components/LinkComponent';
import { TextComponent } from '../../components/TextComponent';
import { InputComponent } from '../../components/InputComponent';
import { SmallContainer } from '../../components/SmallContainer';
import { ButtonComponent } from '../../components/ButtonComponent';
import { MessageComponent } from '../../components/MessageComponent';

import config from '../../config';

export const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const { action } = useParams();
  const navigate = useNavigate();

  const [loginControl, setLoginControl] = useState('signIn');
  const [message, setMessage] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});

  const handleGetInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async () => {
    fetch(`${config.api2Url}/login/${loginControl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setMessage(data.message);
          setTimeout(() => {
            setMessage(undefined);
          }, 3000);
        } else {
          setUser({ ...userInfo, isLogged: true });
          setMessage(data.message);
          setTimeout(() => {
            setMessage(undefined);
            navigate('/');
          }, 3000);
        }
      });
  };

  useEffect(() => {
    const login = action.toLowerCase();
    switch (login) {
      case 'signin':
        setLoginControl('signin');
        document.title = `Sign In | ${config.siteName}`;
        break;

      case 'signup':
        setLoginControl('signup');
        document.title = `Sign Up | ${config.siteName}`;
        break;

      case 'signout':
        setLoginControl('signin');
        document.title = `Sign Out | ${config.siteName}`;
        setUser({ ...user, isLogged: false });
        setMessage('You left successfully');
        navigate('/login/signin');
        setTimeout(() => {
          setMessage(undefined);
        }, 3000);
        break;

      default:
        navigate('/');
        break;
    }
  }, [action, navigate, setUser, user]);

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
          handleChange={handleGetInfo}
        />
        <InputComponent
          text="Password:"
          placeholder="Type your password here..."
          name="password"
          type="password"
          handleChange={handleGetInfo}
        />
        <ButtonComponent bold={false} handleSubmit={handleSubmitLogin}>
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
      {message && <MessageComponent message={message} />}
      <ReturnButton />
    </Styled.Container>
  );
};
