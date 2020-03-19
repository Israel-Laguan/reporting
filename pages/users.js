import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../components/Header";

const User = () => {
  return (
    <>
      <Header createUser />
      <Jumbotron fluid>
        <Container fluid></Container>
      </Jumbotron>
    </>
  );
};

export default User;
