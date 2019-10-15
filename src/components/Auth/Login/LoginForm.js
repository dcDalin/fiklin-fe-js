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
  Message,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ForgotPass from '../ForgotPass';

const LoginForm = ({ onSubmit, onChange, errors, loading, values }) => {
  return (
    <Card centered style={{ marginTop: '50px', marginBottom: '50px', minWidth: '30%' }}>
      <Card.Content>
        <Card.Header>Log in</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Form onSubmit={onSubmit} noValidate loading={loading}>
          {errors.general ? (
            <Message negative>
              <Message.Header>{errors.general}</Message.Header>
            </Message>
          ) : (
            ''
          )}

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
          <Button type="submit" color="purple">
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
