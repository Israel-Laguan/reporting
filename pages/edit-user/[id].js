import React, { useState } from "react";
import { useRouter } from "next/router";
import { Jumbotron, Container } from "reactstrap";
import Header from "../../components/Header";
import FormUser from "../../components/FormUser";
import withAuth from "../../utils/withAuth";

const EditUser = ({auth}) => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({});

  React.useEffect(() => {
    setUser({
      id,
      name: "Walter flores",
      email: "flores@gmail.com",
      password: "asdadadad",
      rol: "ADMIN"
    });
  }, [id]);
  return (
    <>
      <Header users createUser auth={auth}/>
      <Jumbotron fluid>
        <Container fluid>
          <div className="col-md-4 mx-auto">
            <FormUser initialValues={user} />
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default withAuth(EditUser);
