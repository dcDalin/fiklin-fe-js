import React from 'react';
import { Modal, Button, Header, Form, Divider } from 'semantic-ui-react';

class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loading: false,
    };
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, closeOnEscape, closeOnDimmerClick, loading } = this.state;

    return (
      <>
        <Button className="link-button" type="button" onClick={this.closeConfigShow(true, false)}>
          Forgot Password?
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          size="mini"
          closeIcon={!loading}
        >
          <Modal.Header className="custom-modal-header">
            <Header as="h2">Forgot Password</Header>
          </Modal.Header>

          <Modal.Content>
            <Form>
              <Form.Field required>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email Address" />
              </Form.Field>
              <Divider />
              <Button type="submit" color="purple" onClick={this.close}>
                Submit
              </Button>
            </Form>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

export default ForgotPass;
