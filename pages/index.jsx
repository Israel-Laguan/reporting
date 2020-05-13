import React from "react";
import Header from "../components/Header";
import withAuth from "../utils/withAuth";
import { Jumbotron, Container } from "reactstrap";

const Home = ({ auth }) => (
  <div>
    <Header users etl auth={auth} />
    <Container>
    	<div className="d-flex flex-row justify-content-center align-items-center vh-100">
    	<img src="https://www.nisira.com.pe/images/logo.png" style={{width: "50vw"}}>
        <h2>
        Bienvenido!
        </h2>
    	</div>
    </Container>
  </div>
);

export default withAuth(Home);
