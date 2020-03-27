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
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'

const BodyListReport = ({ load, data = [], auth }) => {
  const [userName, setUserName] = useState('')
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

  let reports = data.filter(e =>!e.status);
  let invoices = data.filter(e=>e.status);
  const getReports = (reports)=>{
    return reports.map(report => (
      <ListGroupItem key={report.invoice_id}>
        <Row>
          <Col>
            <p className="lead">{`${report.invoice_id} || ${report.client}`}</p>
          </Col>
          <Col md={{ size: 4, offset: 2 }}>
            <Link href={`/report/${report.report_id}`}>
              <Button outline color="success">Ver</Button>
            </Link>{' '}
            {isAdmin && (
              <Link href={`/edit-report/${report.report_id}`}>
                <Button outline className="mr-2 ml-1" color="primary">Editar</Button>
              </Link>
            )}
            {isBoss && (
              <Link href={`/edit-report/${report.report_id}`}>
                <Button outline color="primary">Editar</Button>
              </Link>
            )}
            {isAdmin && (
              <Button outline color="danger" onClick={toggle}>
                Eliminar
              </Button>
            )}
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Confirmar</ModalHeader>
              <ModalBody>
                ¿Esta seguro que quiere eliminar este reporte?
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
  }

  React.useEffect(() => {
    const userRole = localStorage.getItem('user_role')
    if (userRole === 'ADMIN') setIsAdmin(true)
    if (userRole === 'BOSS') setIsBoss(true)
    const user_email = localStorage.getItem('user_email')
    if(user_email) setUserName(user_email)
  }, [])

  return (
    <Jumbotron>
      <h3 className="display-4">Bienvenido {userName}</h3>
      <div className="my-5">
        <h3>Reportes</h3>
        {
                load ? 
                (
                  <div className="text-center">
                    <Spinner size="lg" color="primary" />
                  </div>
                )
                :null
        }
        {
          reports && reports.length === 0 ? 
          (
          <>
          <p>No se han encontrado reportes aún</p>
          <Link href={`/new-report`}>
            <Button size="lg" color="success">+ Agrega una ahora</Button>        
          </Link>{' '}
          </>
          )
          :
          <ListGroup>{getReports(reports)}</ListGroup>
        }        
      </div>
      <div className="my-5">
        <h3>Facturas</h3>
        {
                load ? 
                (
                  <div className="text-center">
                    <Spinner size="lg" color="primary" />
                  </div>
                )
                :null
        }
        {
          invoices && invoices.length === 0 ?
          (
            <>
            <p>No se han encontrado facturas aún</p>
            <Link href={`/new-report`}>
              <Button size="lg" color="success"> + Agrega una ahora</Button>
            </Link>
            </>
            )
            :
            <ListGroup>{getReports(invoices)}</ListGroup>          
        }
      </div>
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
