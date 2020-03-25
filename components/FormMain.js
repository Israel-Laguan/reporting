import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from 'reactstrap'
import swal from 'sweetalert'
import Router from 'next/router'

const FormMain = ({ invoice = {}, auth, edit }) => {
  const [client, setClient] = useState('')
  const [company, setCompany] = useState('')
  const [invoiceId, setInvoiceId] = useState('')
  const [items, setItems] = useState('')
  const [total, setTotal] = useState('')
  const [status, setStatus] = useState(false)
  const [createdAt, setCreatedAt] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': auth.getToken(),
    }
    const options = {
      method: edit ? 'PUT' : 'POST',
      body: JSON.stringify({
        company,
        client,
        items,
        total,
        status,
      }),
    }
    const res = await fetch(
      `https://etl-auth.herokuapp.com/api/v1/report/${
        edit ? invoice.report_id : ''
      }`,
      {
        headers,
        ...options,
      },
    ).then(res => res.json())
    const { success, errors, msg } = res
    if (!success) {
      console.error(errors)
      swal('Error!', msg, 'error')
    } else {
      swal('Correcto!', msg, 'success').then(() => {
        if (edit) {
          Router.push(`/report/${invoice.report_id}`)
        } else {
          Router.push('/')
        }
      })
    }
  }

  const handleChange = (key, value) => {
    switch (key) {
      case 'company':
        setCompany(value)
        break
      case 'client':
        setClient(value)
        break
      case 'invoiceId':
        setInvoiceId(value)
        break
      case 'items':
        setItems(value)
        break
      case 'total':
        setTotal(value)
        break
      case 'status':
        setStatus(value)
        break
      case 'updateAt':
        setUpdatedAt(value)
        break
      default:
        break
    }
  }

  React.useLayoutEffect(() => {
    console.log('hello', edit, invoice)
    if (edit) {
      setClient(invoice.client)
      setCompany(invoice.company)
      setInvoiceId(invoice.invoice_id)
      setItems(invoice.items)
      setTotal(invoice.total)
      setStatus(invoice.status)
      setCreatedAt(invoice.created_at)
    }
  }, [edit, invoice])

  return (
    <>
      <h2 className="display-4">{company}</h2>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col xs="12" md={{ size: 4 }}>
            <FormGroup>
              <Label for="client">Cliente</Label>
              <Input
                type="text"
                id="client"
                placeholder="ingrese client"
                defaultValue={client}
                onChange={e => handleChange('client', e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs="6" md={{ size: 3, offset: 2 }}>
            <FormGroup>
              <Label for="invoice">Factura N°</Label>
              <h2 className="display-5">{invoiceId}</h2>
            </FormGroup>
          </Col>
          <Col md={3} xs="6" style={{ textAlign: 'center' }}>
            <FormGroup>
              <Label for="fecha">Fecha</Label>
              <h2 className="display-5">{createdAt}</h2>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Descripcion</th>
                  <th>P.U.</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Input
                      type="textarea"
                      name="items"
                      id="items"
                      defaultValue={items}
                      onChange={e => handleChange('items', e.target.value)}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total</td>
                  <td>
                    <Input
                      type="text"
                      name="total"
                      id="total"
                      defaultValue={total}
                      onChange={e => handleChange('total', e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 4, offset: 8 }} md={{ size: 2, offset: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" defaultChecked={status} /> Pay
              </Label>
            </FormGroup>
          </Col>
          <Col xs={{ size: 4, offset: 8 }} md={{ size: 2, offset: 10 }}>
            <Button>{edit ? 'Guardar' : 'Crear'}</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

FormMain.propTypes = {
  company: PropTypes.string,
  client: PropTypes.string,
  reportId: PropTypes.string,
  items: PropTypes.string,
  total: PropTypes.string,
  tax: PropTypes.number,
  status: PropTypes.bool,
  createdAt: PropTypes.string,
  updateAt: PropTypes.string,
}

FormMain.defaultProps = {
  invoice: {
    company: 'nisira',
    client: 'Walter Flores Neciosup',
    report_id: '00001',
    invoice_id: 0,
    items: '2k arroz * 5 = 10',
    total: '64.00',
    status: false,
    created_at: '17/03/2020',
    updated_at: '17/03/2020',
  },
}

export default FormMain
