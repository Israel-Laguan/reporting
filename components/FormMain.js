import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Table
} from "reactstrap";

const FormMain = ({ invoice = {} }) => {
  const [client, setClient] = useState("");
  const [company, setCompany] = useState("");
  const [reportId, setReportId] = useState("");
  const [items, setItems] = useState("");
  const [total, setTotal] = useState("");
  const [tax, setTax] = useState(0);
  const [status, setStatus] = useState(false);
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);

  const handleChange = (key, value) => {
    switch (key) {
      case "company":
        setCompany(value);
        break;
      case "client":
        setClient(value);
        break;
      case "reportId":
        setReportId(value);
        break;
      case "items":
        setItems(value);
        break;
      case "total":
        setTotal(value);
        break;
      case "tax":
        setTax(value);
        break;
      case "status":
        setStatus(value);
        break;
      case "updateAt":
        setUpdatedAt(value);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    setClient(invoice.client);
    setCompany(invoice.company);
    setReportId(invoice.reportId);
    setItems(invoice.items);
    setTotal(invoice.total);
    setTax(invoice.tax);
    setStatus(invoice.status);
    setCreatedAt(invoice.createdAt);
    setUpdatedAt(invoice.updatedAt);
  }, [invoice]);

  return (
    <>
      <h2 className="display-4">{company}</h2>
      <Form>
        <Row form>
          <Col xs="12" md={{ size: 4 }}>
            <FormGroup>
              <Label for="client">Cliente</Label>
              <Input
                type="text"
                id="client"
                placeholder="ingrese client"
                value={client}
                onChange={e => handleChange("client", e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs="6" md={{ size: 3, offset: 2 }}>
            <FormGroup>
              <Label for="invoice">Factura N°</Label>
              <h2 className="display-5">{reportId}</h2>
            </FormGroup>
          </Col>
          <Col md={3} xs="6" style={{ textAlign: "center" }}>
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
                      value={items}
                      onChange={e => handleChange("items", e.target.value)}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Tax</td>
                  <td>
                    <Input
                      type="text"
                      name="items"
                      id="items"
                      value={tax}
                      onChange={e => handleChange("items", e.target.value)}
                    />
                  </td>
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
                      value={total}
                      onChange={e => handleChange("total", e.target.value)}
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
                <Input type="checkbox" checked={status} /> Pay
              </Label>
            </FormGroup>
          </Col>
          <Col xs={{ size: 4, offset: 8 }} md={{ size: 2, offset: 10 }}>
            <Button>Guardar</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

FormMain.propTypes = {
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

export default FormMain;
