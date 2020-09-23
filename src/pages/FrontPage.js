import React from "react";

import { Image } from "react-bootstrap";

import AboutPage from "./AboutPage";

export default function FrontPage() {
  return (
    <div>
      <div style={{ padding: "5%" }}>
        <h1 id="home">Welcome to my website</h1>
        <p>Half portfolio, half for fun</p>
        <p>Currently under heavy construction</p>
        <Image
          src={require("../assets/catstruction.gif")}
          roundedCircle
          fluid
        />
      </div>

      <AboutPage id="about" />
    </div>
  );
}
