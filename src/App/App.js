import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';
import ResponsiveContainer from '../components/ResponsiveContainer/ResponsiveContainer';
import Content from '../components/Content';

const App = () => (
  <Router>
    <ResponsiveContainer>
      <Content />
      <Footer />
    </ResponsiveContainer>
  </Router>
);

export default App;
