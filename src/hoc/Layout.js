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
            
            <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
            <Nav.Link href="#about"><h4>About Me</h4></Nav.Link>
            <Nav.Link href="#contact"><h4>Contact</h4></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
      <Navbar className="fixed-bottom" bg="light">
        AdamsTech.org 2020
      </Navbar>
    </div>
  );
}
