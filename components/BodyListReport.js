import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
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
  ModalFooter,
} from 'reactstrap'
import Router from 'next/router'

const BodyListReport = ({ data = [], auth }) => {
  const [modal, setModal] = useState(false)
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [isBoss, setIsBoss] = React.useState(false)

  const toggle = () => setModal(!modal)

  const deleteReport = async id => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    headers['x-access-token'] = auth.getToken()
    const res = await fetch(
      `https://etl-auth.herokuapp.com/api/v1/report/${id}`,
      { headers, method: 'DELETE' },
    )
    if (!res.ok) {
      console.error(res)
    }
    toggle()
    window.location.href = '/'
  }

  let reports = data.map(report => (
    <ListGroupItem key={report.invoice_id}>
      <Row>
        <Col>
          <p className="lead">{`${report.invoice_id} || ${report.client}`}</p>
        </Col>
        <Col md={{ size: 4, offset: 2 }}>
          <Link href={`/report/${report.report_id}`}>
            <Button color="success">Ver</Button>
          </Link>{' '}
          {isAdmin && (
            <Link href={`/edit-report/${report.report_id}`}>
              <Button color="primary">Editar</Button>
            </Link>
          )}
          {isBoss && (
            <Link href={`/edit-report/${report.report_id}`}>
              <Button color="primary">Editar</Button>
            </Link>
          )}
          {isAdmin && (
            <Button color="danger" onClick={toggle}>
              Eliminar
            </Button>
          )}
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Confirmar</ModalHeader>
            <ModalBody>
              ¿Esta seguro que quiere eleminar este reporte?
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => deleteReport(report.report_id)}
              >
                Aceptar
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </ListGroupItem>
  ))

  React.useEffect(() => {
    const userRole = localStorage.getItem('user_role')
    if (userRole === 'ADMIN') setIsAdmin(true)
    if (userRole === 'BOSS') setIsBoss(true)
  }, [])

  return (
    <Jumbotron>
      <h3 className="display-4">Lista de Reportes</h3>
      <ListGroup>{reports}</ListGroup>
    </Jumbotron>
  )
}

BodyListReport.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      report_id: PropTypes.string.isRequired,
      invoice_id: PropTypes.number.isRequired,
      client: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    }).isRequired,
  ),
}


export default BodyListReport
