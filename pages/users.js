import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  Jumbotron,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col
} from "reactstrap";
import Header from "../components/Header";

const Users = ({ list = [] }) => {
  let renderUsers = list.map(user => {
    return (
      <ListGroupItem key={user.id}>
        <Row>
          <Col>
            <p className="lead">{`${user.username} || ${user.firstName} ${user.lastName} (${user.rol}) `}</p>
          </Col>
          <Col md={{ size: 2, offset: 4 }}>
            <Link href="/edit-user/[id]" as={`/edit-user/${user.id}`} passHref>
              <a type="button" className="btn btn-primary">
                Editar
              </a>
            </Link>{" "}
          </Col>
        </Row>
      </ListGroupItem>
    );
  });

  return (
    <>
      <Header createUser />
      <Jumbotron fluid>
        <Container fluid>
          <ListGroup>{renderUsers}</ListGroup>
        </Container>
      </Jumbotron>
    </>
  );
};

Users.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      rol: PropTypes.string
    }).isRequired
  )
};

Users.defaultProps = {
  list: [
    {
      id: "1",
      firstName: "Juan",
      lastName: "Silupu Maza",
      username: "adminnn1",
      rol: "Admin"
    },
    {
      id: "2",
      firstName: "Henry",
      lastName: "Tello Maza",
      username: "adminnn1",
      rol: "Super Admin"
    },
    {
      id: "3",
      firstName: "Jose",
      lastName: "Maria Maza",
      username: "adminnn1",
      rol: "Jefe"
    }
  ]
};

export default Users;
