import React from 'react';
import faker from 'faker';
import { Image } from 'semantic-ui-react';

const DropDownTrigger = ({ user }) => (
  <span>
    <Image avatar src={faker.internet.avatar()} /> {user}
  </span>
);

export default DropDownTrigger;
