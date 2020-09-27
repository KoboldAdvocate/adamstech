import React from "react";

import { Col, Container, Jumbotron, Row } from "react-bootstrap";

function AboutPage() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>About Me</h1>
          </Jumbotron>
        </Col>
        <Col>
          <p>
            My name is Justin Adams and I have a double-major in Computer
            Science and Biology from the{" "}
            <a href="umw.edu">University of Mary Washington</a>.
          </p>
          <p>
            Currently I develop simulations of miltiary hardware in a virtual
            environment for training purposes. My growing passion is working
            with augmented reality, which is the future of complex training
            scenarios.
          </p>
          <p>I also enjoy eating and working out.</p>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default AboutPage;
