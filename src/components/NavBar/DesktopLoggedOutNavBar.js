import React from 'react';
import { Responsive, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getWidth from '../../utils/getWidth';
import SignupModal from '../Auth/Signup/SignupModal';
import WibLogo from '../../assets/wib-logo.png';
import './NavBar.css';

const DesktopLoggedOutNavBar = ({ children, activeItem, onClick }) => {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Menu borderless className="custom-nav">
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

        <Menu.Menu position="right">
          <Menu.Item
            className="custom-menu-item"
            name="login"
            active={activeItem === 'login'}
            onClick={onClick}
            as={Link}
            to="/login"
          />
          <SignupModal activeItem={activeItem} />
        </Menu.Menu>
      </Menu>
      {children}
    </Responsive>
  );
};

DesktopLoggedOutNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DesktopLoggedOutNavBar;
