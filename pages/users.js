import React, { useState } from 'react'
import PropTypes from 'prop-types'
import fetch from 'node-fetch'
import Link from 'next/link'
import { fetcher } from '../utils/fetcher'
import {
  Jumbotron,
  Container,
  ListGroup,
  ListGroupItem,
  Spinner,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap'
import Header from '../components/Header'
import withAuth from '../utils/withAuth'
import swal from 'sweetalert'

const Users = ({ auth, list = [] }) => {
  const [load, setLoad] = useState(true)
  const [modal, setModal] = useState(false)
  const [users, setUsers] = useState([])

  React.useEffect(() => {
    async function fetchUsers() {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      headers['x-access-token'] = auth.getToken()
      const res = await fetch(
        'https://etl-auth.herokuapp.com/api/v1/user/all',
        { headers },
      )
      setLoad(false)
      const { ok, errors, msg, data } = await res.json()
      if (!ok) {
        console.error(msg, errors)
        return swal('Error!', msg, 'error')
      }
      setUsers(data)
    }
    fetchUsers()
  }, [])
  const toggle = () => setModal(!modal)

  const deleteUser = async (e, id) => {
    e.preventDefault()
    console.log({ id })
    let res = await fetcher(`/user/${id}`, 'DELETE')
    if (!res.ok) {
      return console.error(res.msg, res.errors)
    }
    window.location.reload()
  }
  let renderUsers = users.map(user => {
    return (
      <ListGroupItem key={user._id}>
        <Row className="px-5">
          <Col>
            <p className="lead">{`${user.email} || ${user.name} (${user.role}) `}</p>
          </Col>
          <Col className="d-flex" md={{ size: 2, offset: 4 }}>
            <a
              href={`/edit-user/${user._id}`}
              className="btn btn-outline-primary mr-3"
            >
              Editar
            </a>
            <a
              onClick={e => toggle(e, user._id)}
              className="btn btn-outline-danger mr-3"
            >
              Eliminar
            </a>
          </Col>
        </Row>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Confirmar</ModalHeader>
          <ModalBody>¿Esta seguro que quiere eliminar este usuario?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={e => deleteUser(e, user._id)}>
              Aceptar
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </ListGroupItem>
    )
  })

  return (
    <>
      <Header createUser auth={auth} />
      <Jumbotron fluid>
        <Container fluid>
          {load ? (
            <div className="text-center">
              <Spinner size="lg" color="primary" />
            </div>
          ) : (
            <ListGroup>{renderUsers}</ListGroup>
          )}
        </Container>
        <Link href={`/`}>
          <Button className="ml-5 mb-5 mt-5" color="primary" size="lg">
            ⬅️ Volver
          </Button>
        </Link>{' '}
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
