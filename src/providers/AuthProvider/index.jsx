import P from 'prop-types';

import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loading } from '../../components/Loading';
import { MessageComponent } from '../../components/MessageComponent';

import { api, createSession } from '../../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loadingControl, setLoadingControl] = useState(true);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState({ authenticated: false });

  useEffect(() => {
    const recoveredToken = localStorage.getItem('token');
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser && recoveredToken) {
      setUser({ ...JSON.parse(recoveredUser) });
      api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;
    }

    setLoadingControl(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await createSession(email, password);
      const loggedUser = response.data.user;
      const token = response.data.token;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem(
        'user',
        JSON.stringify({ ...loggedUser, authenticated: true }),
      );
      localStorage.setItem('token', token);
      setUser({ ...loggedUser, authenticated: true });
      navigate('/');
    } catch (error) {
      if (error.response.data) {
        setMessage(error.response.data.message);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        setMessage('Internal server error! Try again later!');
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    }
  };

  const register = async (email, password) => {
    try {
      await api.post('/login/signup', { email, password });
      login(email, password);
    } catch (error) {
      if (error.response.data) {
        setMessage(error.response.data.message);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        setMessage('Internal server error! Try again later!');
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser({ authenticated: false });
    navigate('/login/signin');
  };

  const updateFavorites = async () => {
    if (!user.authenticated) {
      return;
    }

    try {
      const response = await api.get(`/drink/favorites/${user._id}`);
      const newFavorites = response.data.user.favorites;
      const newFavoritesInfo = response.data.user.favoritesInfo;

      localStorage.setItem(
        'user',
        JSON.stringify({
          ...user,
          favorites: newFavorites,
          favoritesInfo: newFavoritesInfo,
        }),
      );
      setUser({
        ...user,
        favorites: newFavorites,
        favoritesInfo: newFavoritesInfo,
      });
    } catch (error) {
      setMessage('Internal server error! Try again later!');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateFavorites }}
    >
      {message && <MessageComponent message={message} />}
      {loadingControl ? <Loading /> : children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
