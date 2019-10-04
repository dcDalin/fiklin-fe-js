import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../containers/Home';
import Explore from '../../containers/Explore';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';

const Content = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/explore" component={Explore} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </>
);

export default Content;
