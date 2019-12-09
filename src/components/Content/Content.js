import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Explore from '../../pages/Explore';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import AuthRoute from '../../Util/AuthRoute';
import ProtectedRoute from '../../Util/ProtectedRoute';
import Profile from '../../pages/Profile';
import NewTour from '../../pages/NewTour';
import Tour from '../../pages/Tour';

const Content = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/explore" component={Explore} />
    <Route path="/tour" component={Tour} />
    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/signup" component={Signup} />
    <ProtectedRoute path="/profile" roles={['admin', 'user']} component={Profile} />
    <ProtectedRoute path="/new-tour" roles={['admin', 'user']} component={NewTour} />
  </>
);

export default Content;
