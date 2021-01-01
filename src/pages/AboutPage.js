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
            My name is Justin Adams, and I'm a software developer. I graduated Cum Laude from the University of Mary Washington, where I was the Vice-President of the ACM Chapter.          
          </p>
          <br />
          <p>
            I currently lead a team developing simulated training environments with the goal of replacing real-world training. In my free time, I'm typically learning new technology or building a side-project.
            You can also find me in the gym or eating.
          </p>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default AboutPage;
