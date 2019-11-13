import React from 'react';
import { Responsive, Container, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getWidth from '../../utils/getWidth';
import SignupModal from '../Auth/Signup/SignupModal';
import WibLogo from '../../assets/wib-logo.png';
import './NavBar.css';

const MobileLoggedOutNavBar = ({ children, activeItem, onClick }) => {
  return (
    <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Container>
        <Menu borderless size="mini" className="custom-mobile-menu">
          <Menu.Item
            className="custom-mobile-logo"
            name="home"
            active={activeItem === 'home'}
            onClick={onClick}
            as={Link}
            to="/"
          >
            <Image size="mini" src={WibLogo} verticalAlign="top" />
          </Menu.Item>
          <Menu.Item position="right">
            <Menu.Item
              className="custom-menu-item"
              name="login"
              active={activeItem === 'login'}
              onClick={onClick}
              as={Link}
              to="/login"
            />
            <SignupModal activeItem={activeItem} />
          </Menu.Item>
        </Menu>
      </Container>
      {children}
    </Responsive>
  );
};

MobileLoggedOutNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MobileLoggedOutNavBar;
