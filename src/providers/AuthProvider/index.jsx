import P from 'prop-types';

import { createContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { ThemeProvider } from '../ThemeProvider';
import { Loading } from '../../components/Loading';

import { api, createSession } from '../../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();

  const [loadingControl, setLoadingControl] = useState(true);
  const [user, setUser] = useState({
    _id: null,
    email: null,
    password: null,
    authenticated: false,
  });

  useEffect(() => {
    const recoveredToken = localStorage.getItem('token');
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser && recoveredToken) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${recoveredToken}`;
    }

    setLoadingControl(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const loggedUser = response.data.user;
    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token);
    setUser(loggedUser);
    // navigate('/');
  };

  const register = (email, password) => {};

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    // navigate('/login/signin');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {loadingControl ? (
        <ThemeProvider>
          <Loading />
        </ThemeProvider>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
