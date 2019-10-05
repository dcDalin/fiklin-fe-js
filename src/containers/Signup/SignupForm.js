/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card, Modal, Button, Form, Icon, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <Card centered style={{ marginTop: '50px', marginBottom: '50px', minWidth: '30%' }}>
      <Card.Content>
        <Card.Header>Sign up</Card.Header>
        <Card.Meta>
          <span>
            Already have an account? <Link to="/login">Log in.</Link>
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Form error noValidate>
          <Form.Input type="text" label="Username" fluid placeholder="Username" name="username" />
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
          <Form.Input
            type="password"
            label="Confirm Password"
            fluid
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <Modal.Actions className="custom-forgot-pass-link"></Modal.Actions>

          <Button type="submit" color="purple">
            Sign up
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
          <Icon name="google" /> Sign up with Google
        </Button>
      </Segment>
    </Card>
  );
};

export default SignupForm;
