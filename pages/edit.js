import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../components/Header";
import FormMain from "../components/FormMain";
const Edit = () => {
  return (
    <>
      <Header />
      <Jumbotron fluid>
        <Container fluid>
          <FormMain />
        </Container>
      </Jumbotron>
    </>
  );
};

FormMain.defaultProps = {
  invoice: {
    company: "Azordev",
    client: "Israel",
    reportId: "00001",
    items: "2k arroz * 5 = 10",
    total: "64.00",
    tax: "0",
    status: false,
    createdAt: "17/03/2020",
    updatedAt: "17/03/2020"
  }
};

export default Edit;
