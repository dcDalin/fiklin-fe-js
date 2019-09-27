import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, Menu, Input, Image } from 'semantic-ui-react';
import getWidth from '../utils/getWidth';
import WibLogo from '../assets/wib-logo.png';

const DesktopContainer = ({ children }) => {
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Menu borderless>
        <Menu.Item>
          <Image src={WibLogo} size="mini" verticalAlign="top" />
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
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
