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
            My name is Justin Adams. I have graduated Cum Laude with a
            double-major in Computer Science and Biology from the{" "}
            <a href="umw.edu">University of Mary Washington</a>. There I was the
            Vice-President of the UMW ACM chapter, where my chief role was the organization and management of 
            the annual Hack-a-Thon, and assisting in helping other students understand the courses subject material.
          </p>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default AboutPage;
