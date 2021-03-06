import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import props from "./data/companylist.json";
import { Card, Col } from "react-bootstrap";

export default function CompanyList() {
  return (
    <>
      {props.map((lis) => (
        <Col xl={2} lg={3} md={4} sm={6} xs={12} key={lis.id.toString()}>
          <Card
            bg="dark"
            text="white"
            className="companyDetailer"
            key={lis.symbol.toString()}
          >
            <Card.Header as="h6" className="p-2">
              <span className="labelofcompany">Company : </span>
              <span className="titleofcompany">{lis.symbol}</span>
            </Card.Header>
            <Card.Body className="p-2">
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
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
