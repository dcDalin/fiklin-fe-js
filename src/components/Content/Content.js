import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Explore from '../../pages/Explore';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import AuthRoute from '../../Util/AuthRoute';

const Content = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/explore" component={Explore} />
    <AuthRoute path="/login" component={Login} />
    <AuthRoute path="/signup" component={Signup} />
  </>
);

export default Content;
