import "./styles.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Col } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  // const [todos, setTodos] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setInput2("");
  };
  const handleInputFirstChange = (e) => {
    setInput(e.target.value);
  };
  const handleInputSecondChange = (e) => {
    setInput2(e.target.value);
  };

  // const addTodo = (todo) => {
  //   if (!todo.text || /^\s*$/.test(todo.text)) {
  //     return;
  //   }
  //   const newTodos = [todo, ...todos];
  //   setTodos(newTodos);
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add To Portfolio Analyser
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control
              value={input}
              type="text"
              placeholder="Company Name Here"
              onChange={handleInputFirstChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            {/* <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>100</option>
              <option>250</option>
              <option>50</option>
            </Form.Control> */}
            <Form.Control
              value={input2}
              type="number"
              min={0}
              placeholder="Quantity"
              onChange={handleInputSecondChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
