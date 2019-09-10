import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import ContactItem from './ContactItem';
import Modal from './Modal';

export default class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localState: []
    }
  }
  async componentDidMount() {
    const resp = await fetch('/api/contacts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data1 = await resp.json();
    console.log(data1);

    this.setState({ localState: data1 })

  }

  render() {
    console.log(this.state.localState)
    return (
      <Container>
        <Row>
          <Col xs='6'>
            <Table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.localState.map((el, index) => {
                  return <ContactItem key={index} firstname={el.first_name} lastname={el.last_name} />
                })}
              </tbody>
            </Table>
          </Col>
          <Col xs='6'>
            <Modal />
          </Col>
        </Row>
      </Container>
    )
  }
}

