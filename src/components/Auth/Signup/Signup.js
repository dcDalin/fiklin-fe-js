/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { USER_SIGNUP } from '../../../GraphQL/Mutations/Auth';
import SignupForm from './SignupForm';
import useForm from '../../../Util/hooks';
import { AuthContext } from '../../../context/auth';

const Signup = props => {
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  // eslint-disable-next-line no-use-before-define
  const { onChange, onSubmit, values } = useForm(signUpUserCallback, {
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const [signUpUser, { loading }] = useMutation(USER_SIGNUP, {
    update(_, { data: { userSignUp: userData } }) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      setTimeout(() => {
        setErrors({});
      }, 3000);
    },
    variables: {
      username: values.username,
      emailAddress: values.emailAddress,
      password: values.password,
      confirmPassword: values.confirmPassword,
    },
  });

  function signUpUserCallback() {
    signUpUser();
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

Signup.propTypes = {
  history: PropTypes.node.isRequired,
};

export default withRouter(Signup);
