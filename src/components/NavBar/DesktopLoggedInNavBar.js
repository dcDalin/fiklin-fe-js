import React from 'react';
import { Responsive, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getWidth from '../../utils/getWidth';
import WibLogo from '../../assets/wib-logo.png';
import UserAvatarDropdown from './UserAvatarDropdown';

const DesktopLoggedInNavBar = ({ children, activeItem, onClick, logout, user }) => {
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
          <Menu.Item>
            <UserAvatarDropdown logout={logout} user={user.username} />
          </Menu.Item>
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
  user: PropTypes.shape({
    id: PropTypes.string,
    token: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.shape({
      emailAddress: PropTypes.string,
      isVerified: PropTypes.bool,
    }),
  }).isRequired,
};

export default DesktopLoggedInNavBar;
