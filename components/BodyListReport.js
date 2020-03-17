import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Jumbotron,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from "reactstrap";

const BodyListReport = ({ data = [] }) => {
  let reports = data.map(report => (
    <ListGroupItem key={report.invoiceId}>
      <Row>
        <Col>
          <p className="lead">{`${report.invoiceId} - ${report.client}`}</p>
        </Col>
        <Col md={{ size: 4, offset: 2 }}>
          <Link href="/report">
            <Button color="success">Ver</Button>
          </Link>{" "}
          <Link href="/edit">
            <Button color="primary">Editar</Button>
          </Link>{" "}
          <Button color="danger">Eliminar</Button>
        </Col>
      </Row>
    </ListGroupItem>
  ));

  return (
    <Jumbotron>
      <h3 className="display-4">Lista de Reportes</h3>
      <ListGroup>{reports}</ListGroup>
    </Jumbotron>
  );
};

BodyListReport.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      reportId: PropTypes.number.isRequired,
      invoiceId: PropTypes.string.isRequired,
      client: PropTypes.string.isRequired,
      lastUpdate: PropTypes.string.isRequired
    }).isRequired
  )
};

export default BodyListReport;
