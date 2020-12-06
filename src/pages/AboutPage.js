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
            My name is Justin Adams, and I'm a software developer. I have graduated Cum Laude with a
            double-major in Computer Science and Biology from the{" "}
            <a href="umw.edu">University of Mary Washington</a>, where I was also the Vice-President of the UMW ACM Chapter.          
          </p>
          <br />
          <p>
            Professionally, I currently develop simulated training environments with the goal of replacing real-world training.
            For fun, I like to build projects with Arduino/Pi for GPIO hardware interfacing. You can also usually find me in the gym or eating.
          </p>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default AboutPage;
