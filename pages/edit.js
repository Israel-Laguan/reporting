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

export default Edit;
