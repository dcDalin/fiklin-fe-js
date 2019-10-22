import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Explore from '../../pages/Explore';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import AuthRoute from '../../Util/AuthRoute';
import Profile from '../../pages/Profile';

const Content = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/explore" component={Explore} />
    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
  </>
);

export default Content;
