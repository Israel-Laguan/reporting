import React, { useState } from "react";
import { useRouter } from "next/router";
import { Jumbotron, Container, Button } from "reactstrap";
import Header from "../../components/Header";
import FormUser from "../../components/FormUser";
import withAuth from "../../utils/withAuth";
import swal from "sweetalert";
import Link from 'next/link'

const EditUser = ({auth}) => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({});

  React.useEffect( () => {
    async function fetchUsers(){
      if (id){
        const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
        headers['x-access-token'] = auth.getToken();
        const res = await fetch(`https://etl-auth.herokuapp.com/api/v1/user/${id}`, {headers})
        const { success, errors, msg, data } = await res.json()
        if (!success) {
          swal("Error!", errors);
          //swal("Error!", errors[0].message, "error");
          return console.error(msg, errors);
        }
  
        setUser({
          ...data,
          id: data._id
        })
      }
      }
    fetchUsers();
  }, [id]);

  return (
    <>
      <Header users createUser auth={auth}/>
      <Jumbotron fluid>
        <Container fluid>
          <div className="col-md-4 mx-auto">
            <FormUser initialValues={user} edit={true}/>
          </div>
        </Container>
        {
        <Link href={`/`}>
          <Button className="ml-5 mb-5 mt-5" color="primary" size="lg">🔙 Volver</Button>
        </Link>
        }
      </Jumbotron>
    </>
  );
};

export default withAuth(EditUser);
