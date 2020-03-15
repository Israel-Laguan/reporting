import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Report = () => (
    <div>
      <Card>
        <CardImg top width="128px" src="/report.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Report</CardTitle>
          <CardSubtitle>Company</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
);

export default Report;