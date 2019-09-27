import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, Menu, Input, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import getWidth from '../utils/getWidth';
import WibLogo from '../assets/wib-logo.png';

const DesktopContainer = ({ children, activeItem, onClick }) => {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Menu borderless>
        <Menu.Item name="home" active={activeItem === 'home'} onClick={onClick} as={Link} to="/">
          <Image src={WibLogo} size="mini" verticalAlign="top" />
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item name="faq" active={activeItem === 'faq'} onClick={onClick} as={Link} to="/faq" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="log in" />
          <Menu.Item name="sign up" />
        </Menu.Menu>
      </Menu>
      {children}
    </Responsive>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopContainer;
