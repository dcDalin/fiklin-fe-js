import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from '../../pages/desktopContainer';
import MobileContainer from '../../pages/mobileContainer';
import { AuthContext } from '../../context/auth';

const ResponsiveContainer = ({ children }) => {
  const { logout, user } = useContext(AuthContext);
  const { pathname } = window.location;

  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <>
      <DesktopContainer
        user={user}
        logout={logout}
        activeItem={activeItem}
        onClick={handleItemClick}
      >
        {children}
      </DesktopContainer>
      <MobileContainer
        user={user}
        logout={logout}
        activeItem={activeItem}
        onClick={handleItemClick}
      >
        {children}
      </MobileContainer>
    </>
  );
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveContainer;
