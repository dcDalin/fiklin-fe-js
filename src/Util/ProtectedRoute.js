/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';
import checkRoles from '../utils/checkRoles';

function ProtectedRoute({ component: Component, ...rest }) {
  const { me } = useContext(AuthContext);

  const checkRolesRes = checkRoles(me.roles, rest.roles);

  if (checkRolesRes) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Route {...rest} render={() => <Redirect to="/" />} />;
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;