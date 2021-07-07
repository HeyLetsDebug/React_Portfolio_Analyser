import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import EnterDataModal from "./EnterDataModal.js";
import React, { useState } from "react";

export default function Header({ number }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-4">
      <Navbar.Brand href="#home">ABDecodes</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Developer</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}

      <Nav className="mr-auto">
        <Nav.Link href="#features">About Developer</Nav.Link>
      </Nav>
      <Nav>
        <EnterDataModal />
      </Nav>
    </Navbar>
  );
}
