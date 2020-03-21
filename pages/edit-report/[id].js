import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../../components/Header";
import FormMain from "../../components/FormMain";
import withAuth from "../../utils/withAuth";

const Edit = ({auth}) => {
  return (
    <>
      <Header auth={auth}/>
      <Jumbotron fluid>
        <Container fluid>
          <FormMain />
        </Container>
      </Jumbotron>
    </>
  );
};

export default withAuth(Edit);