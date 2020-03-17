import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

const TotalPay = ({ totalPrice, tax }) => {
  return (
    <>
      <Row>
        <Col sm={{ size: "2", offset: 8 }}>
          <h5 className="display-5">Subtotal</h5>
        </Col>
        <Col sm={{ size: "2" }}>
          <h5 className="display-5">{totalPrice}</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: "2", offset: 8 }}>
          <h5 className="display-5">Tax</h5>
        </Col>
        <Col sm={{ size: "2" }}>
          <h5 className="display-5">{tax}</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: "2", offset: 8 }}>
          <h5 className="display-5">Total</h5>
        </Col>
        <Col sm={{ size: "2" }}>
          <h5 className="display-5">{totalPrice}</h5>
        </Col>
      </Row>
    </>
  );
};

TotalPay.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  tax: PropTypes.number,
  subTotal: PropTypes.number
};

TotalPay.defaultProps = {
  tax: 0,
  subTotal: 0
};

export default TotalPay;
