import React from 'react';
import { Tab, Container, Segment, Grid, Header, Image, Button } from 'semantic-ui-react';
import BusLayout from './BusLayout';

const Tour = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Button className="custom-success-button" size="huge">
            Book my seat
          </Button>
          <Header as="h3" style={{ fontSize: '2em' }}>
            We Help Companies and Companions
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            We can give your company superpowers to do things that they never thought possible. Let
            us delight your customers and empower your needs... through pure data analytics.
          </p>
          <Header as="h3" style={{ fontSize: '2em' }}>
            We Make Bananas That Can Dance
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
            bioengineered.
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          {/* <Image
            bordered
            rounded
            size="large"
            src="http://milimanibackpackers.com/wp-content/uploads/2013/11/hellsgate-1.jpg"
          /> */}
          <BusLayout />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button className="custom-success-button" size="huge">
            Book my seat
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Tour;
