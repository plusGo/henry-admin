import React from 'react';
import { UserToken } from '@/types/user-token';

export const AuthContext = React.createContext<
  | {
      userToken: UserToken | null;
      login: (code: string) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = 'AuthContext';

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用');
  }
  return context;
};
