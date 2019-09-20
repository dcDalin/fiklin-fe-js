import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from '../containers/desktopContainer';
import MobileContainer from '../containers/mobileContainer';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveContainer;
