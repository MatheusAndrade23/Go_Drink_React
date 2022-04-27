import P from 'prop-types';

import { createContext, useState } from 'react';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    password: '',
    isLogged: false,
  });

  const AuthContext = createContext(undefined);

  return (
    <AuthContext.Provider value={(user, setUser)}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: P.node.isRequired,
};
