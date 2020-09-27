import React from "react";
import { Nav } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";

export default function Layout(props) {
  return (
    <div
      className="container-fluid text-center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <Navbar
        className="fixed-top"
        style={{ background: "#B86F52" }}
        expand="sm"
      >
        <Navbar.Brand>
          <h2>Justin Adams</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#augmentedreality">A.R.</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
      <Navbar bg="light">AdamsTech.org 2020</Navbar>
    </div>
  );
}
