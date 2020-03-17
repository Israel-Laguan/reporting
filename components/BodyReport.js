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
              <h1 className="display-3">{data.companyName}</h1>
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
              <h2 className="display-5">Factura N°: {data.invoiceId}</h2>
            </Col>
          </Row>
          <p className="lead">Fecha de creacion : {data.lastUpdate}</p>
          <DetailTable />
          <TotalPay totalPrice={data.totalPrice} />
        </Container>
      </Jumbotron>
    </>
  );
};
BodyReport.propTypes = {
  data: PropTypes.shape({
    invoiceId: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired
  }).isRequired
};

BodyReport.defaultProps = {
  data: {
    invoiceId: "00000001",
    client: "Israel",
    companyName: "Azordev",
    items: [],
    totalPrice: 64,
    status: "done",
    lastUpdate: "16/03/2020"
  }
};

export default BodyReport;
