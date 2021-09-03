import React from 'react';
import { UserToken } from '@/types/user-token';

export const AuthenticationContext = React.createContext<
  | {
      user: UserToken;
    }
  | undefined
>(undefined);
