import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../components/Header";
import FormMain from "../components/FormMain";

const New = () => {
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
  invoice: {}
};

export default New;
