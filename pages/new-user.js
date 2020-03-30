import React from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import Link from 'next/link'
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
            <FormUser auth={auth}/>
          </div>
        </Container>
        <Link href={`/`}>
          <Button className="ml-5 mb-5 mt-5" color="primary" size="lg">
            ⬅️ Volver
          </Button>
        </Link>
      </Jumbotron>
    </>
  );
};

export default withAuth(newUser);
