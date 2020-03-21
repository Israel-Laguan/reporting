import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Jumbotron,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const BodyListReport = ({ data = [] }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let reports = data.map(report => (
    <ListGroupItem key={report.invoiceId}>
      <Row>
        <Col>
          <p className="lead">{`${report.invoiceId} || ${report.client}`}</p>
        </Col>
        <Col md={{ size: 4, offset: 2 }}>
          <Link href="/report">
            <Button color="success">Ver</Button>
          </Link>{" "}
          <Link href={`/edit-report/${report.invoiceId}`}>
            <Button color="primary">Editar</Button>
          </Link>{" "}
          <Button color="danger" onClick={toggle}>
            Eliminar
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Confirmar</ModalHeader>
            <ModalBody>
              ¿Esta seguro que quiere eleminar este reporte?"
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Aceptar
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
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
