/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context/auth';

function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Route {...rest} render={() => <Redirect to="/" />} />;

  const clientRoles = rest.roles;
  const serverRoles = user.roles;

  const checkRolesRes = clientRoles.some(val => {
    return serverRoles.indexOf(val) !== -1;
  });

  if (checkRolesRes) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Route {...rest} render={() => <Redirect to="/" />} />;
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;
