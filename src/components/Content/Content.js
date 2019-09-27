import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../containers/Home';
import FAQ from '../../containers/FAQ';

const Content = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/faq" component={FAQ} />
  </>
);

export default Content;
