import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import ContactList from './components/ContactList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col><h1>Contact List</h1></Col>
            <ContactList />
          </Row>
        </Container>
      </div>
    )
  }
}
