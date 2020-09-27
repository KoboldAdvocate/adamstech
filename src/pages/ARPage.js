import React from "react";

import { Col, Container, Figure, Jumbotron, Row } from "react-bootstrap";

function ARPage() {
  return (
    <Container className="test">
      <Row>
        <Col>
          <Figure>
            <Figure.Image src={require("../assets/ar_chicken.gif")} />
            <Figure.Caption>Early prototype for Eggtub AR</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Jumbotron>
            <h1>Augmented Reality (A.R.)</h1>
          </Jumbotron>
          <p>
            A.R. is the future of human/computer interaction, and will change
            the world the same way the personal computer did. Right now it's
            seeing more uses in the video game world, but once technology
            advances enough, we could see it integrated in everything we do.
          </p>
          <p>
            Here I have a beginnings of a mobile A.R. program I'm working on,
            which populates and then controls a virtual chicken. The program
            determines geometric planes through the camera, and places a virtual
            overlay on them which the program can then use as a foundation. The
            chicken then will treat these planes as actual ground, and can walk
            on them, or fall off the side of them.
          </p>
          <p>
            <a href="https://assetstore.unity.com/packages/3d/characters/animals/meshtint-free-chicken-mega-toon-series-151842">
              Chicken Unity asset from Meshtint
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ARPage;
