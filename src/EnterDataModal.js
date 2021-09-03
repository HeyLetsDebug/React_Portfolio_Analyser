import React, { Component } from "react";
import "./styles.css";
import { Modal, Button, Form, Col, Control } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyNamer from "./CompanyDropDown.js";
import AutoSuggestCompany from "./AutoSuggestCompany.js";

class EnterDataModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      compQuantityInput: "",
      compName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  handleChange(evt) {
    const compQuantityInput = evt.target.validity.valid
      ? evt.target.value
      : this.state.compQuantityInput;

    this.setState({ compQuantityInput });
  }

  changeCompNameHandler(e) {
    this.setState({ compName: e.target.vlaue });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    console.log(data.compName + " & " + data.compQuantityInput);
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.openModal}>
          Add To Portfolio
        </Button>
        <Modal
          show={this.state.isOpen}
          onHide={this.closeModal}
          size="lg"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Col}>
                {/* <CompanyNamer /> */}
                <AutoSuggestCompany />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Quantity"
                  onInput={this.handleChange.bind(this)}
                  value={this.state.compQuantityInput}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default EnterDataModal;
