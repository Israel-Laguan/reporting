import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

const TotalPay = ({ totalPrice }) => {
  return (
    <Row>
      <Col xs={{ size: '4', offset: 4 }} md={{ size: '2', offset: 8 }}>
        <h5 className="display-5">Total</h5>
      </Col>
      <Col xs="4" md={{ size: '2' }}>
        <h5 className="display-5">{totalPrice}</h5>
      </Col>
    </Row>
  )
}

TotalPay.propTypes = {
  totalPrice: PropTypes.string.isRequired
}

TotalPay.defaultProps = {
  totalPrice: '$0.00'
}

export default TotalPay
