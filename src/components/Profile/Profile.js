import React from 'react';
import {
  Label,
  Grid,
  Header,
  Popup,
  Image,
  Segment,
  Container,
  Form,
  Radio,
} from 'semantic-ui-react';
import { useQuery } from '@apollo/react-hooks';
import { LOGGED_IN_USER } from '../../GraphQL/Queries/User';

const Profile = () => {
  const { loading, error, data } = useQuery(LOGGED_IN_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message} </p>;
  return (
    <Container style={{ margin: '20px' }}>
      <Segment placeholder>
        <Grid>
          <Grid.Column width={4}>
            <Image
              src="https://secure.meetupstatic.com/photos/member/9/d/2/e/highres_276040238.jpeg"
              circular
              size="small"
              centered
              style={{ padding: 'none' }}
            />

            <Header.Content
              style={{
                textAlign: 'center',
                padding: '10px',
                fontWeight: 'bolder',
                fontSize: '18px',
              }}
            >
              {data.me.username}
            </Header.Content>
            <Popup
              content="some content"
              trigger={
                <Label as="a" size="mini" basic color="blue">
                  Admin
                </Label>
              }
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <p>This is the bio. Stuff goes here</p>
          </Grid.Column>
          <Grid.Column width={5}>
            <Form>
              <Form.Field>Settings</Form.Field>
              <Form.Field>
                <Radio toggle label="Profile visible" />
              </Form.Field>
              <Form.Field>
                <Radio toggle label=" SMS Notifications" />
              </Form.Field>
              <Form.Field>
                <Radio toggle label=" Email Notifications" />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default Profile;
