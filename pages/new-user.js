import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../components/Header";
import FormUser from "../components/FormUser";

const newUser = () => {
  return (
    <>
      <Header />
      <Jumbotron fluid>
        <Container fluid>
          <FormUser />
        </Container>
      </Jumbotron>
    </>
  );
};

export default newUser;
