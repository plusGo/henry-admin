import React from 'react';
import { Redirect } from 'umi';

const AuthenticationWrapper = () => {
  return <Redirect to="/login" />;
};

export default AuthenticationWrapper;
