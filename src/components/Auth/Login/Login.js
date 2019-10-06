/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { USER_LOGIN } from '../../../GraphQL/Mutations/Auth';
import LoginForm from './LoginForm';
import useForm from '../../../Util/hooks';

const Login = props => {
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(signInUser, {
    emailAddress: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(USER_LOGIN, {
    update(_, result) {
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: {
      email: values.emailAddress,
      password: values.password,
    },
  });

  function signInUser() {
    loginUser();
  }

  return (
    <LoginForm
      onSubmit={onSubmit}
      onChange={onChange}
      errors={errors}
      loading={loading}
      values={values}
    />
  );
};

export default withRouter(Login);
