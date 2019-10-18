import React, { useEffect, contextRef } from 'react';
import {
  Container,
  Header,
  Segment,
  Form,
  Item,
  Sticky,
  Label,
  Statistic,
} from 'semantic-ui-react';

const Home = () => {
  useEffect(() => {
    document.title = 'Go have FUN | WIB';
  }, []);

  const paragraph =
    'Once a holiday home and later to be a retirement home for the Adamsons, Elsamere history connects with the future as conservation is the main objective on the shores...';
  return (
    <Container>
      <Header as="h1" icon textAlign="center" size="huge" style={{ padding: '40px' }}>
        <Header.Content>Find Your Next Adventure</Header.Content>
      </Header>
      <Sticky context={contextRef}>
        <Segment raised>
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid placeholder="From" />
              <Form.Input fluid placeholder="To" />
              <Form.Input fluid placeholder="Date" />
            </Form.Group>
          </Form>
        </Segment>
      </Sticky>
      <Header as="h3" icon textAlign="left" size="tiny">
        <Header.Content>Happening soon</Header.Content>
      </Header>
      <Item.Group divided>
        <Item style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
          <Item.Image
            src="https://cdn.getyourguide.com/img/tour_img-374454-68.jpg"
            style={{ margin: '5px' }}
          />
          <Item.Content>
            <Item.Header as="a" style={{ margin: '5px' }}>
              My Neighbor Totoro
            </Item.Header>
            <Item.Meta>
              <span className="cinema">IFC Cinema</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Statistic floated="right" size="mini" style={{ padding: '5px' }}>
                <Statistic.Label>KSHS</Statistic.Label>
                <Statistic.Value>2,509</Statistic.Value>
              </Statistic>
              <Label>Limited</Label>
              <Label icon="globe" content="Nairobi to Naivasha" />
              <Label icon="globe" content="1 Week to go" />
              <Label icon="globe" content="Fully booked" />
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
          <Item.Image
            src="https://files.mookh.com/uploads/Poster_design_1.jpg?q=1571429034837"
            style={{ margin: '5px' }}
          />
          <Item.Content>
            <Item.Header as="a" style={{ margin: '5px' }}>
              My Neighbor Totoro
            </Item.Header>
            <Item.Meta>
              <span className="cinema">IFC Cinema</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Statistic floated="right" size="mini" style={{ padding: '5px' }}>
                <Statistic.Label>KSHS</Statistic.Label>
                <Statistic.Value>2,509</Statistic.Value>
              </Statistic>
              <Label>Limited</Label>
              <Label icon="globe" content="Nairobi to Naivasha" />
              <Label icon="globe" content="1 Week to go" />
              <Label icon="globe" content="Fully booked" />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
};

export default Home;
