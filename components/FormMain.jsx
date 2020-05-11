import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import swal from 'sweetalert'
import Router from 'next/router'
import {
  Button,
  Col,
  Row,
  Form,
  FormGroup,
  Alert,
  Label,
  Input,
  Table,
} from 'reactstrap'
import Validate from '../utils/Validate'

const FormMain = ({ invoice = {}, auth, edit }) => {
  const [client, setClient] = useState('')
  const [company, setCompany] = useState('')
  const [invoiceId, setInvoiceId] = useState('')
  const [items, setItems] = useState('')
  const [total, setTotal] = useState('')
  const [status, setStatus] = useState(false)
  const [createdAt, setCreatedAt] = useState(null)
  const [alertMessage, setAlertMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    //Status define if this report is Report or Invoice
    
    let {band, msg:message} = Validate('client',client);
    if(!band){
      setAlertMessage(message);
      return  setTimeout(()=>setAlertMessage(''),6000)
    }
    
    let { band:bandD, msg:messageD } = Validate('description', items);

    if(!bandD){
      setAlertMessage(messageD);      
      return setTimeout(()=>setAlertMessage(''),6000);
    }

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
      `https://etl-authorize.herokuapp.com/api/v1/report/${
        edit ? invoice.report_id : ''
      }`,
      {
        headers,
        ...options,
      },
    ).then(res => res.json())
    const { ok, errors, msg } = res
    if (!ok) {
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
    <div className="container">
      <h2 className="text-center mb-3">Agregar un nuevo Reporte/Factura</h2>
      <p className="text-center">En el siguiente apartado puede agregar un reporte detallado a nombre de un cliente</p>
      <p className="text-center">Si ud. selecciona la opcion de agregar un precio el reporte sera considerado una factura</p>
      <h2 className="display-4">{company}</h2>
      <Form className="border p-5 mb-3 card" onSubmit={handleSubmit}>
        <Row form>
          <Col xs="12" md={{ size: 4 }}>
            <FormGroup>
              <Label for="client">Cliente</Label>
              <Input
                type="text"
                id="client"
                placeholder="Nombre del cliente"
                defaultValue={client}
                onChange={e => handleChange('client', e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs="6" md={{ size: 3, offset: 2 }}>
            <FormGroup>
              <Label for="invoice">Registro N°</Label>
              <h2 className="display-5">{invoiceId}</h2>
            </FormGroup>
          </Col>
          <Col md={3} xs="6" style={{ textAlign: 'center' }}>
            <FormGroup>
              <Label for="fecha">Fecha</Label>
              <h2 className="display-5">{createdAt ? createdAt : moment(Date.now()).local().format('LL').toLocaleString()}</h2>
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
                </tr>
                <tr>
                  <td>                  
                  </td>
                  <td>
                  <span className="mr-3">
                Total
              </span>
                  <Input
                    type="number"
                    name="total"
                    id="total"
                    defaultValue={total}
                    onChange={e => handleChange('total', e.target.value)}
                    disabled={!status}
                  />

                  </td>
                </tr>
              </tbody>
            </Table>                  
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 4, offset: 6 }} md={{ size: 2, offset: 9 }}>
            <FormGroup check className="my-3">              
                <Input
                  type="checkbox"
                  name="status"
                  id="status"
                  defaultValue={status}
                  onChange={e => handleChange('status', e.target.checked)}
                />
              <label htmlFor="status">
                Añadir precio
              </label>
            </FormGroup>
          </Col>
          <Col>
          
          <div className="container">
            <Alert className={`${alertMessage === '' ? 'd-none':null} py-3`} color="danger">
              <p className="text-white text-center h5">
                {alertMessage}
              </p>
            </Alert>
          </div>
          

          </Col>
          <Col xs={{ size: 4, offset: 7 }} md={{ size: 2, offset: 9 }}>
            <Button >{edit ? 'Guardar' : 'Crear'}</Button>
          </Col>
        </Row>
      </Form>
    </div>
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
