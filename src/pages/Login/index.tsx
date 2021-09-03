import React, { FC, useEffect } from 'react';
import Loading from '@/components/Loading';
import { useLocation } from 'umi';

const LoginPage: FC = () => {
  const location = useLocation();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default LoginPage;
