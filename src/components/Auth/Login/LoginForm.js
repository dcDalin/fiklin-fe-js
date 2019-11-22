import React from 'react';
import {
  Card,
  Modal,
  Divider,
  Button,
  Form,
  Icon,
  Segment,
  Header,
  Container,
} from 'semantic-ui-react';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ForgotPass from '../ForgotPass';

const LoginForm = ({ onSubmit, onChange, errors, loading, values }) => {
  if (errors.general) {
    toast({
      title: 'Sorry',
      description: <p>{errors.general}</p>,
      type: 'error',
      time: 3000,
    });
  }

  return (
    <Container style={{ width: '30%' }}>
      <SemanticToastContainer />
      <Card centered style={{ marginTop: '50px', marginBottom: '50px', minWidth: '30%' }}>
        <Card.Content>
          <Card.Header className="custom-form-title">Log in</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Form onSubmit={onSubmit} noValidate loading={loading}>
            <Form.Input
              error={
                errors.emailAddress ? { content: errors.emailAddress, pointing: 'above' } : false
              }
              type="email"
              label="Email"
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
            <Modal.Actions className="custom-forgot-pass-link">
              <ForgotPass />
            </Modal.Actions>
            <Divider />
            <Button className="custom-success-button" type="submit" color="purple">
              Log in
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
            <Icon name="google" /> Log in with Google
          </Button>
          <Card.Meta>
            <span>
              Do not have an account? <Link to="/signup">Sign up today.</Link>
            </span>
          </Card.Meta>
        </Segment>
      </Card>
    </Container>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  values: PropTypes.string.isRequired,
};

export default LoginForm;
