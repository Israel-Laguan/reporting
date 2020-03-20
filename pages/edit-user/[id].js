import React, { useState } from "react";
import { withRouter } from "next/router";
import { Jumbotron, Container } from "reactstrap";
import Header from "../../components/Header";
import FormUser from "../../components/FormUser";

const EditUser = ({ router }) => {
  const [user, setUser] = useState({});
  React.useEffect(() => {
    //Traer DATOS con el id
    console.log(router.query.id);
    //.... FETCH....
    setUser({
      id: router.query.id,
      username: "adadadadad",
      firstName: "Juan",
      lastName: "Silupu",
      password: "asdadadad",
      rol: "Admin"
    });
  }, []);
  console.log(user);

  return (
    <>
      <Header createUser />
      <Jumbotron fluid>
        <Container fluid>
          <FormUser initialValues={user} data={user} />
        </Container>
      </Jumbotron>
    </>
  );
};

export default withRouter(EditUser);
