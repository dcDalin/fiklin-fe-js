import React from 'react';
import { Responsive, Container, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getWidth from '../../utils/getWidth';
import UserAvatarDropdown from './UserAvatarDropdown/UserAvatarDropdown';
import WibLogo from '../../assets/wib-logo.png';

const MobileLoggedInNavBar = ({ children, activeItem, onClick, logout, user }) => {
  return (
    <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Container>
        <Menu borderless size="mini" className="custom-mobile-menu">
          <Menu.Item
            className="custom-menu-item"
            name="home"
            active={activeItem === 'home'}
            onClick={onClick}
            as={Link}
            to="/"
          >
            <Image size="mini" src={WibLogo} verticalAlign="top" />
          </Menu.Item>
          <Menu.Item position="right">
            <UserAvatarDropdown logout={logout} user={user.username} />
          </Menu.Item>
        </Menu>
      </Container>
      {children}
    </Responsive>
  );
};

MobileLoggedInNavBar.propTypes = {
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

export default MobileLoggedInNavBar;
