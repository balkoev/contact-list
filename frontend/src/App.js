import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

const contactItems = [
  {
    id: 1,
    first_name: "Adam",
    last_name: "Balkoev",
  },
  {
    id: 2,
    first_name: "Vasya",
    last_name: "Pupkin",
  },
  {
    id: 3,
    first_name: "Ivan",
    last_name: "Ivanov",
  },
  {
    id: 4,
    first_name: "Nastya",
    last_name: "Smirnova",
  },
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>Contact List</Col>
          </Row>
        </Container>
      </div>
    )
  }
}
