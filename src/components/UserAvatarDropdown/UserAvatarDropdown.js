import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import DropDownTrigger from './DropDownTrigger';
import './UserAvatarDropdown.css';

const UserAvatarDropdown = ({ logOut, user }) => (
  <Dropdown trigger={<DropDownTrigger user={user} />}>
    <Dropdown.Menu>
      <Dropdown.Item>
        <span className="custom-wib-span">
          <span className="custom-wib-currency">WIBs</span>
          <span className="custom-wib-amount">2,123</span>
        </span>
      </Dropdown.Item>
      <Dropdown.Divider className="custom-divider" />
      <Dropdown.Item text="My Profile" />
      <Dropdown.Item text="Save as" />
      <Dropdown.Item text="Log Out" onClick={logOut} />
    </Dropdown.Menu>
  </Dropdown>
);

export default UserAvatarDropdown;
