import React, { FC, useEffect } from 'react';
import Loading from '@/components/Loading';
import { useHistory, useLocation } from 'umi';
import { SafeAny } from '@/types/safe-any';
import { useAuth } from '@/components/AuthProvider/context';

const LoginPage: FC = () => {
  const location: SafeAny = useLocation();
  const history = useHistory();
  const { userToken, login } = useAuth();

  useEffect(() => {
    if (!!userToken) {
      const redirectUri = location.query.redirectUri || '/';
      history.push(redirectUri);
    } else {
      const code = location.query.code;
      login(code);
    }
  }, [userToken]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default LoginPage;
