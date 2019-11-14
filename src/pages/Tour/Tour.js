import React from 'react';
import { Tab, Container } from 'semantic-ui-react';
import BusLayout from './BusLayout';

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => (
      <Tab.Pane attached={false}>
        <BusLayout />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
];

const Tour = () => (
  <Container>
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  </Container>
);

export default Tour;
