import React, { useEffect, createRef } from 'react';
import { Container, Ref, Header, Segment, Form, Item, Sticky, Label } from 'semantic-ui-react';
import CardItem from './CardItem';

const Home = () => {
  useEffect(() => {
    document.title = 'Go have FUN | WIB';
  }, []);

  const contextRef = createRef();
  return (
    <Container>
      <Header as="h1" icon textAlign="center" size="huge" style={{ padding: '40px' }}>
        <Header.Content>Find Your Next Adventure</Header.Content>
      </Header>
      <Ref innerRef={contextRef}>
        <Segment style={{ boxShadow: 'none', border: 'none' }}>
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
          <Item.Group>
            <CardItem />
          </Item.Group>
        </Segment>
      </Ref>
    </Container>
  );
};

export default Home;
