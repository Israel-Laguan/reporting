import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../components/Header";
import FormMain from "../components/FormMain";
import withAuth from "../utils/withAuth";

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

export default withAuth(New);
