import React, { useEffect } from 'react';
import SignupForm from '../../components/Auth/Signup/SignupForm';

const SignupContainer = () => {
  useEffect(() => {
    document.title = 'Sign up | WIB';
  }, []);
  return <SignupForm />;
};

export default SignupContainer;
