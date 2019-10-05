import React, { useState, useContext, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';
import { USER_SIGNUP } from '../../GraphQL/Mutations/Auth';
import SignupForm from './SignupForm';
import { AuthContext } from '../../context/auth';
import useForm from '../../Util/Hooks';

const SignupContainer = ({ history }) => {
  useEffect(() => {
    document.title = 'Sign up | WIB';
  }, []);
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(signUpUser, {
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const [userSignUp, { loading }] = useMutation(USER_SIGNUP, {
    update(
      _,
      {
        data: { userSignup: userData },
      },
    ) {
      context.login(userData);
      history.push('/');
      window.location.reload();
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function signUpUser() {
    userSignUp();
  }
  return (
    <SignupForm
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      loading={loading}
      values={values}
    />
  );
};

export default withRouter(SignupContainer);
