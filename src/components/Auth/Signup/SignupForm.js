import React, { useState } from 'react';
import { Container, Card, Modal, Button, Form, Icon, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';

const SignupForm = ({ onSubmit, onChange, errors, loading, values }) => {
  const [storedErrors, setStoredErrors] = useState(errors);
  if (storedErrors.general) {
    toast({
      title: 'Sorry',
      description: <p>{storedErrors.general}</p>,
      type: 'error',
      time: 3000,
    });
    setStoredErrors({ general: 'stupid' });
  }
  return (
    <Container style={{ width: '30%' }}>
      <SemanticToastContainer />
      <Card centered style={{ marginTop: '50px', marginBottom: '50px', minWidth: '30%' }}>
        <Card.Content>
          <Card.Header className="custom-form-title">Sign up</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Form onSubmit={onSubmit} noValidate loading={loading}>
            <Form.Input
              error={errors.username ? { content: errors.username, pointing: 'above' } : false}
              type="text"
              label="Username"
              fluid
              placeholder="Username"
              name="username"
              onChange={onChange}
              value={values.username}
            />
            <Form.Input
              error={
                errors.emailAddress ? { content: errors.emailAddress, pointing: 'above' } : false
              }
              type="email"
              label="Email Address"
              fluid
              placeholder="Email Address"
              name="emailAddress"
              onChange={onChange}
              value={values.emailAddress}
            />
            <Form.Input
              error={errors.password ? { content: errors.password, pointing: 'above' } : false}
              type="password"
              label="Password"
              fluid
              placeholder="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
            <Form.Input
              error={
                errors.confirmPassword
                  ? { content: errors.confirmPassword, pointing: 'above' }
                  : false
              }
              type="password"
              label="Confirm Password"
              fluid
              placeholder="Confrim Password"
              name="confirmPassword"
              onChange={onChange}
              value={values.confirmPassword}
            />
            <Modal.Actions className="custom-forgot-pass-link"></Modal.Actions>
            <Button className="custom-success-button" type="submit" color="purple">
              Sign up
            </Button>
          </Form>
        </Card.Content>
        <Segment
          disabled={loading}
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
          <Card.Meta>
            <span>
              Already have an account? <Link to="/login">Log in.</Link>
            </span>
          </Card.Meta>
        </Segment>
      </Card>
    </Container>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  values: PropTypes.string.isRequired,
};

export default SignupForm;
