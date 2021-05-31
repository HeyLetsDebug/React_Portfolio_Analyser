import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./dataentrymodal.js";
import React, { useState } from "react";

export default function Header({ number }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="px-4">
      <Navbar.Brand href="#home">ABDecodes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Developer</Nav.Link>
        </Nav>
        <Form inline>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button> */}

          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add To Portfolio
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
