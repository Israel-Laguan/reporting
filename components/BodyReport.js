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
          <div className="text-right">
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
          </div>
          <Row>
            <Col className="mb-3">
              <h2 className="display-4">{data.company}</h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6">
              <h4 className="display-5 inline-block">{`Cliente: ${data.client}`}</h4>
            </Col>
            <Col xs="12" md="6">
              <h4 className="display-5">Factura N°: {data.reportId}</h4>
            </Col>
            <Col xs="12" md="6">
              <h4 className="display-5">
                Fecha de creación : {data.createdAt}
              </h4>
            </Col>
          </Row>
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
    client: "Israel Silupu Maza",
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
