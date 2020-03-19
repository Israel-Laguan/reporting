import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import DetailTable from "./DetailTable";
import TotalPay from "./TotalPay";

const BodyReport = ({ data = {} }) => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            <Col sm="10">
              <h1 className="display-3">{data.company}</h1>
            </Col>
            <Col sm="2">
              <Button
                color="info"
                onClick={e => {
                  e.preventDefault(); // https://www.thoughtco.com/how-to-add-a-print-button-4072006
                  window.print();
                  return false;
                }}
              >
                Imprimir
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="display-5">Cliente: {data.client}</h2>
            </Col>
            <Col>
              <h2 className="display-5">Factura N°: {data.reportId}</h2>
            </Col>
          </Row>
          <p className="lead">Fecha de creación : {data.createdAt}</p>
          <DetailTable items={data.items} tax={data.tax} total={data.total} />
          <TotalPay totalPrice={data.total} />
        </Container>
      </Jumbotron>
    </>
  );
};

BodyReport.propTypes = {
  company: PropTypes.string,
  client: PropTypes.string,
  reportId: PropTypes.string,
  items: PropTypes.string,
  total: PropTypes.string,
  tax: PropTypes.number,
  status: PropTypes.bool,
  createdAt: PropTypes.string,
  updateAt: PropTypes.string
};

BodyReport.defaultProps = {
  data: {
    company: "Azordev",
    client: "Israel",
    reportId: "00001",
    items: "2k arroz * 5 = 10",
    total: "64.00",
    tax: "0",
    status: false,
    createdAt: "17/03/2020",
    updatedAt: "17/03/2020"
  }
};

export default BodyReport;
