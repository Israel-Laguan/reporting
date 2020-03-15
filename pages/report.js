import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonToggle,
  Row,
  Col
} from "reactstrap";

const Report = () => (
  <Row>
    <Col sm="3">
      <Card>
        <CardImg top height="300px" src="/img/pic2.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Report</CardTitle>
          <CardSubtitle>Companiiiiy</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Report;
