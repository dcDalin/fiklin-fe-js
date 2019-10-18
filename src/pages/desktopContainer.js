import React from 'react';
import PropTypes from 'prop-types';
import DesktopLoggedInNavBar from '../components/NavBar/DesktopLoggedInNavBar';
import DesktopLoggedOutNavBar from '../components/NavBar/DesktopLoggedOutNavBar';

const DesktopContainer = ({ user, logout, children, activeItem, onClick }) => {
  const menuBar = user ? (
    <DesktopLoggedInNavBar activeItem={activeItem} onClick={onClick} logout={logout} user={user}>
      {children}
    </DesktopLoggedInNavBar>
  ) : (
    <DesktopLoggedOutNavBar activeItem={activeItem} onClick={onClick}>
      {children}
    </DesktopLoggedOutNavBar>
  );

  return menuBar;
};

DesktopContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    token: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.shape({
      emailAddress: PropTypes.string,
      isVerified: PropTypes.bool,
    }),
  }).isRequired,
  logout: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DesktopContainer;
