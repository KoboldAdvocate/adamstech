import React from "react";
import { Image, Nav } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";

import "./Layout.css";

export default function Layout(props) {
  return (
    <div
      className="container-fluid text-center"
      style={{ backgroundColor: "#FFFAF5" }}
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
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}

    </div>
  );
}
