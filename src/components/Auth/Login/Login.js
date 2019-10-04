/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, Modal, Divider, Button, Form, Icon, Segment, Header } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import ForgotPass from '../ForgotPass';

const Login = () => {
  return (
    <Card centered style={{ marginTop: '50px', marginBottom: '50px', minWidth: '30%' }}>
      <Card.Content>
        <Card.Header>Log in</Card.Header>
        <Card.Meta>
          <span>
            Don't have an account? <Link to="/signup">Sign up today.</Link>
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Form error noValidate>
          <Form.Input
            type="email"
            label="Email"
            fluid
            placeholder="Email Address"
            name="phoneNumber"
          />
          <Form.Input
            type="password"
            label="Password"
            fluid
            placeholder="Password"
            name="password"
          />
          <Modal.Actions className="custom-forgot-pass-link">
            <ForgotPass />
          </Modal.Actions>
          <Divider />
          <Button type="submit" color="purple">
            Log in
          </Button>
        </Form>
      </Card.Content>
      <Segment
        textAlign="center"
        style={{ border: 'none', boxShadow: 'none', backgroundColor: '#ecf0f1' }}
      >
        <Header as="h5">OR</Header>
        <Button
          color="google plus"
          style={{ margin: '20px', letterSpacing: '1px' }}
          as={Link}
          to="/signup"
        >
          <Icon name="google" /> Log in with Google
        </Button>
      </Segment>
    </Card>
  );
};

export default withRouter(Login);
