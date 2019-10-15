import React from 'react';
import { Responsive, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getWidth from '../../utils/getWidth';
import WibLogo from '../../assets/wib-logo.png';

const DesktopLoggedInNavBar = ({ children, activeItem, onClick, logout }) => {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Menu borderless size="mini">
        <Menu.Item
          className="custom-menu-item"
          name="home"
          active={activeItem === 'home'}
          onClick={onClick}
          as={Link}
          to="/"
        >
          <Image src={WibLogo} size="mini" verticalAlign="top" />
        </Menu.Item>

        <Menu.Item
          className="custom-menu-item"
          name="explore"
          active={activeItem === 'explore'}
          onClick={onClick}
          as={Link}
          to="/explore"
        />
        <Menu.Menu position="right">
          <Menu.Item className="custom-menu-item" name="logout" onClick={logout} />
        </Menu.Menu>
      </Menu>
      {children}
    </Responsive>
  );
};

DesktopLoggedInNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default DesktopLoggedInNavBar;
