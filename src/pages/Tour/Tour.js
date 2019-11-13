import React from 'react';
import { Tab, Container } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Book Seat',
    render: () => <Tab.Pane attached={false}>Book Seat</Tab.Pane>,
  },
  {
    menuItem: 'More Info',
    render: () => <Tab.Pane attached={false}>More Info</Tab.Pane>,
  },
];

const Tour = () => (
  <Container>
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  </Container>
);

export default Tour;
