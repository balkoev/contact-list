import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from './Input';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      first_name: '',
      last_name: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('asdasd')
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  addInputFirstname = async (e) => {
    await this.setState({
      first_name: e.target.value,
    })
  }

  addInputLastname = async (e) => {
    await this.setState({
      last_name: e.target.value,
    })
  }

  addContact = async () => {
    const resp = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    const data = await resp.json();
    console.log('hui')
    this.toggle()
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel} Add contact</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add contact</ModalHeader>
          <ModalBody>
            <Input
              addInputFirstname={this.addInputFirstname}
              addInputLastname={this.addInputLastname}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.addContact} color="primary">Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;