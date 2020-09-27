import React from "react";

import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  return (
    <div style={{ padding: "5%" }}>
      <Carousel>
        <Carousel.Item>
          <img alt="Unity Game Engine" src={require("../assets/unity.png")} />
          <Carousel.Caption>
            <h3>The Unity Game Engine</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="Augmented Reality" src={require("../assets/ar.jpeg")} />
          <Carousel.Caption>
            <h3>Augmented Reality</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Artificial Intelligence"
            src={require("../assets/ai.jpeg")}
          />
          <Carousel.Caption>
            <h3>Artificial Intelligence</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
