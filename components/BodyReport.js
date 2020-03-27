import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'
import DetailTable from './DetailTable'

const BodyReport = ({ data = {} }) => (
    <>
      <Jumbotron fluid>
        <Container fluid>
        <div className="container mb-5">
          
          <div className="text-right">
            <Button
              color="info"
              onClick={e => {
                e.preventDefault() // https://www.thoughtco.com/how-to-add-a-print-button-4072006
                window.print()
                return false
              }}
            >
              📃 Imprimir
            </Button>{' '}
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
              <h4 className="display-5"> {data.status ? `Factura`:`Reporte`} N°: {data.invoice_id}</h4>
            </Col>
          </Row>
          </div>
          <DetailTable client={data.client} items={data.items} total={data.total} status={data.status} />
        </Container>
      </Jumbotron>
    </>
  );

BodyReport.propTypes = {
  company: PropTypes.string,
  client: PropTypes.string,
  report_id: PropTypes.string,
  invoice_id: PropTypes.number,
  items: PropTypes.string,
  total: PropTypes.string,
  status: PropTypes.bool,
  created_at: PropTypes.string,
  update_at: PropTypes.string,
}

BodyReport.defaultProps = {
  data: {
    report_id: '0',
    invoice_id: 1,
    client: 'nisira',
    updated_at: '16/03/2020',
    company: 'nisira',
    client: 'Walter',
    items: '2k arroz * 5 = 10',
    total: '64.00',
    status: false,
    created_at: '17/03/2020',
    updated_at: '17/03/2020',
  },
}

export default BodyReport
