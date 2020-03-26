import React from "react";
import Link from 'next/link'
import { Jumbotron, Container, Button } from "reactstrap";
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
      
      <Link href={`/`}>
        <Button className="ml-5 mb-5" color="primary" size="lg">🔙 Volver</Button>
      </Link>{' '}
    </>
  );
};

FormMain.defaultProps = {
  invoice: {}
};

export default withAuth(New);
