/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { USER_LOGIN } from '../../../GraphQL/Mutations/Auth';
import LoginForm from './LoginForm';
import useForm from '../../../Util/hooks';
import { AuthContext } from '../../../context/auth';

const Login = props => {
  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});

  // eslint-disable-next-line no-use-before-define
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    emailAddress: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(USER_LOGIN, {
    update(
      _,
      {
        data: { userLogin: userData },
      },
    ) {
      context.login(userData);
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

  function loginUserCallback() {
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

Login.propTypes = {
  history: PropTypes.node.isRequired,
};

export default withRouter(Login);
