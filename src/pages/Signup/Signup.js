import React, { useEffect } from 'react';
import Signup from '../../components/Auth/Signup/Signup';

const SignupContainer = () => {
  useEffect(() => {
    document.title = 'Sign up | WIB';
  }, []);
  return <Signup />;
};

export default SignupContainer;
