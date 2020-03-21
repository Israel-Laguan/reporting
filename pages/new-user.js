import React from "react";
import { Jumbotron, Container } from "reactstrap";
import withAuth from "../utils/withAuth";
import Header from "../components/Header";
import FormUser from "../components/FormUser";

const newUser = ({auth}) => {
  return (
    <>
      <Header users auth={auth}/>
      <Jumbotron fluid>
        <Container fluid>
          <div className="col-md-4 mx-auto">
            <FormUser />
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default withAuth(newUser);
