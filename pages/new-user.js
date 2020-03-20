import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../components/Header";
import withAuth from "../utils/withAuth"
const newUser = () => {
  return (
    <>
      <Header />
      <Jumbotron fluid>
        <Container fluid></Container>
      </Jumbotron>
    </>
  );
};

export default withAuth(newUser);
