import React from "react";
import { Jumbotron, Container } from "reactstrap";
import withAuth from "../utils/withAuth"
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

export default withAuth(newUser);
