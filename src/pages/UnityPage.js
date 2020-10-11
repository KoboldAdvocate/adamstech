import React from "react";
import { Col, Container, Figure, Jumbotron, Row } from "react-bootstrap";

function UnityPage() {
  return (
    <div>
    <Container className="test">
      <Row>
        <Col>
          <Jumbotron>
            <h1>Unity Game Engine</h1>
          </Jumbotron>
          <p>Unity is currently my tool of choice. It's an amazing program which allows anything from video game development, to augmented and virtual reality simulations.</p>
        </Col>
        <Col>
          <Figure>
          <iframe frameborder="0" src="https://itch.io/embed-upload/2829588?color=333333" allowfullscreen="" width="980" height="688"><a href="https://justadams.itch.io/unity-game-of-life">Play Unity Game of Life on itch.io</a></iframe>
            <Figure.Caption>
              Conway's Game of Life in Unity
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default UnityPage;
