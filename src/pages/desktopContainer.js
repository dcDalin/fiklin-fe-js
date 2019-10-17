import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';
import DesktopLoggedInNavBar from '../components/NavBar/DesktopLoggedInNavBar';
import DesktopLoggedOutNavBar from '../components/NavBar/DesktopLoggedOutNavBar';

const DesktopContainer = ({ children, activeItem, onClick }) => {
  const { user, logout } = useContext(AuthContext);

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
  children: PropTypes.node.isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DesktopContainer;
