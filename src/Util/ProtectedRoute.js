import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';

function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest} render={props => (user ? <Component {...props} /> : <Redirect to="/" />)} />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
