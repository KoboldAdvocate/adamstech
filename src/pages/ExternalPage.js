import React from "react";

import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";

export default function ExternalPage() {
  return (
    <Container>
      <Jumbotron>
        <h1>External Sites</h1>
      </Jumbotron>
      <div>
        <Row>
          <Col>
            <a href="https://www.linkedin.com/in/adams-tech/">
              <Image fluid src={require("../assets/linkedinlogo.png")} />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/koboldadvocate">
              <Image fluid src={require("../assets/github.png")} />
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
