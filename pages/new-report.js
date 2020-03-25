import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../components/Header";
import FormMain from "../components/FormMain";
import withAuth from "../utils/withAuth";

const New = ({auth}) => {
  return (
    <>
      <Header auth={auth}/>
      <Jumbotron fluid>
        <Container fluid>
          <FormMain auth={auth}/>
        </Container>
      </Jumbotron>
    </>
  );
};

FormMain.defaultProps = {
  invoice: {}
};

export default withAuth(New);
