import React, { FC, useState } from 'react';
import { UserToken } from '@/types/user-token';
import {
  cacheUserToken,
  getUserToken,
  removeUserToken,
  ssoLogin,
} from '@/services/login';
import { AuthContext } from './context';

const AuthProvider: FC = (props) => {
  const [userToken, setUserToken] = useState<UserToken | null>(getUserToken);

  const login = async (code: string) => {
    const userToken = await ssoLogin(code);
    setUserToken(userToken);
    cacheUserToken(userToken);
    return;
  };

  const logout = async () => {
    setUserToken(null);
    removeUserToken();
    return;
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
