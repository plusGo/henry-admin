import React, { FC } from 'react';
import { useAuth } from '@/components/AuthProvider/context';
import { useMount } from '@/utils/use-mount';
import { redirectToSSOLogin } from '@/services/login';
import Loading from '@/components/Loading';

const AuthenticationWrapper: FC = (props) => {
  const { userToken } = useAuth();

  useMount(() => {
    if (!userToken) {
      redirectToSSOLogin();
    }
  });

  if (!!userToken) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Loading />
    </div>
  );
};

export default AuthenticationWrapper;
