import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import props from "./data/companylist.json";
import { Card, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
// import DataEnter from "./dataentrymodal.js";

export default function CompanyList() {
  return (
    <>
      {props.map((lis) => (
        <Col xl={12} lg={12} md={12} sm={12} xs={12} key={lis.id.toString()}>
          <Card
            bg="dark"
            text="white"
            className="companyDetailer"
            key={lis.symbol.toString()}
          >
            <Card.Header as="h6" className="p-2">
              <Row>
                <Col lg={8} md={8} sm={12}>
                  <span className="labelofcompany">Company : </span>
                  <span className="titleofcompany">{lis.symbol}</span>
                </Col>
                <Col lg={4} md={4} sm={12} className="alignRight">
                  <span className="labelofsubdetails">Qty :</span>
                  <span>{lis.quantity}</span>
                </Col>
              </Row>
            </Card.Header>
            {/* <Card.Body className="p-2">
              <Card.Text className="mb-2">
                <span className="labelofsubdetails">Qty :</span>
                {lis.quantity}
              </Card.Text>
              <Card.Text className="mb-2">
                <span className="labelofsubdetails">Avg Price :</span>
                {lis.avgPrice}
              </Card.Text>
              <Card.Text className="mb-2">
                <span className="labelofsubdetails">Curr Price :</span>
                {lis.currentPrice}
              </Card.Text>
            </Card.Body> */}
          </Card>
        </Col>
      ))}
    </>
  );
}
