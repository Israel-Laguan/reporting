import React from "react";
import Header from "../components/Header";
import withAuth from "../utils/withAuth";
import { Jumbotron, Container } from "reactstrap";

const Home = ({ auth }) => (
  <div>
    <Header users etl auth={auth} />
    <Container>
      <Jumbotron>
        <img src="https://www.nisira.com.pe/images/logo.png" />
        <h2>
        Bienvenido!
        </h2>
      </Jumbotron>
    </Container>
  </div>
);

export default withAuth(Home);
