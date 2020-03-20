import React, { useState } from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'
import Link from 'next/link'
import {
  Jumbotron,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from 'reactstrap'
import Header from '../components/Header'
import withAuth from '../utils/withAuth'

const Users = ({ auth, list = [] }) => {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState([])
  React.useEffect( () => {
    async function fetchUsers(){
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      headers['x-access-token'] = auth.getToken();
      const res = await fetch('https://etl-auth.herokuapp.com/api/v1/user/all', {headers})
      const { success, errors, msg, data } = await res.json()
      if (!success) {
        console.error(msg, errors)
        setErrors(errors)
      }
      setUsers(data)
    }
    fetchUsers();
  }, [])
  let renderUsers = users.map(user => {
    return (
      <ListGroupItem key={user._id}>
        <Row>
          <Col>
            <p className="lead">{`${user.email} || ${user.name} (${user.role}) `}</p>
          </Col>
          <Col md={{ size: 2, offset: 4 }}>
            <Link href="/edit-user/[id]" as={`/edit-user/${user._id}`} passHref>
              <a type="button" className="btn btn-primary">
                Editar
              </a>
            </Link>{' '}
          </Col>
        </Row>
      </ListGroupItem>
    )
  })

  return (
    <>
      <Header createUser />
      <Jumbotron fluid>
        <Container fluid>
          <ListGroup>{renderUsers}</ListGroup>
        </Container>
      </Jumbotron>
    </>
  )
}

Users.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      role: PropTypes.string,
    }).isRequired,
  ),
}

Users.defaultProps = {
  list: [
    {
      _id: '2',
      name: 'Henry Silupu Maza',
      email: 'adminnn1',
      role: 'BOSS',
    },
  ],
}

export default withAuth(Users)
