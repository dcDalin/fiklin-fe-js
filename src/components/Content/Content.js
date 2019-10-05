import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Explore from '../../pages/Explore';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

const Content = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/explore" component={Explore} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </>
);

export default Content;
