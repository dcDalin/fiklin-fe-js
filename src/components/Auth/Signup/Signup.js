/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { USER_SIGNUP } from '../../../GraphQL/Mutations/Auth';
import SignupForm from './SignupForm';
import useForm from '../../../Util/hooks';

const Signup = props => {
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const [addUser, { loading }] = useMutation(USER_SIGNUP, {
    update(_, result) {
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
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

export default withRouter(Signup);
