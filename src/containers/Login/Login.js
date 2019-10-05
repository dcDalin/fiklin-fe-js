import React, { useEffect } from 'react';
import Login from '../../components/Auth/Login/Login';

const LoginContainer = () => {
  useEffect(() => {
    document.title = 'Log in | WIB';
  }, []);
  return <Login />;
};

export default LoginContainer;
