import React from 'react';
import PropTypes from 'prop-types';
import MobileLoggedInNavBar from '../components/NavBar/MobileLoggedInNavBar';
import MobileLoggedOutNavBar from '../components/NavBar/MobileLoggedOutNavBar';

const MobileContainer = ({ user, logout, children, activeItem, onClick }) => {
  const menuBar = user ? (
    <MobileLoggedInNavBar activeItem={activeItem} onClick={onClick} logout={logout} user={user}>
      {children}
    </MobileLoggedInNavBar>
  ) : (
    <MobileLoggedOutNavBar>{children}</MobileLoggedOutNavBar>
  );
  return menuBar;
};

MobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileContainer;
