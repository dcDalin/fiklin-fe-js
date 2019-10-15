import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';

// eslint-disable-next-line no-unused-vars
function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route render={props => (user ? <Redirect to="/" /> : <Component {...props} />)} />;
}

AuthRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default AuthRoute;
