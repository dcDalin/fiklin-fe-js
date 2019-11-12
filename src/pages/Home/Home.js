import React, { useEffect } from 'react';
import { Container, Segment, Item } from 'semantic-ui-react';
import CardItem from './CardItem';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Go have FUN | WIB';
  }, []);

  return (
    <Container>
      <h2 className="custom-title">
        <span>Group tours made so easy...</span>
        <br />
        <br />
        Go ahead,
        <br />
        book your seat.
      </h2>
      <h3 className="custom-happening-soon">Happening soon</h3>
      <Segment style={{ padding: '0px', margin: '0px', border: '0px', boxShadow: 'none' }}>
        <Item.Group>
          <CardItem />
        </Item.Group>
      </Segment>
    </Container>
  );
};

export default Home;
