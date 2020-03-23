import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Router from 'next/router'
import swal from 'sweetalert'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'

const Header = ({
  editReport,
  createReport,
  createUser,
  editUser,
  users,
  auth,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isBoss, setIsBoss] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const logOut = () => {
    auth.logout()
    Router.push('/login')
  }

  React.useEffect(() => {
    const userRole = localStorage.getItem('user_role')
    if (userRole === 'ADMIN') setIsAdmin(true)
    if (userRole === 'BOSS') setIsBoss(true)
  }, [])
  return (
    <div>
      <Navbar dark expand="md" style={{ backgroundColor: '#F56D03' }}>
        <Link href="/" passHref>
          <a className="navbar-brand">Reporte</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {editReport && isAdmin && (
              <NavItem>
                <Link href="/edit-report" passHref>
                  <NavLink>Editar</NavLink>
                </Link>
              </NavItem>
            )}
            {createReport && (
              <NavItem>
                <Link href="/new-report" passHref>
                  <NavLink>Crear Reporte</NavLink>
                </Link>
              </NavItem>
            )}
            {createUser && isAdmin && (
              <NavItem>
                <Link href="/new-user" passHref>
                  <NavLink>Crear Usuario</NavLink>
                </Link>
              </NavItem>
            )}
            {createUser && isBoss && (
              <NavItem>
                <Link href="/new-user" passHref>
                  <NavLink>Crear Usuario</NavLink>
                </Link>
              </NavItem>
            )}
            {users && isAdmin && (
              <NavItem>
                <Link href="/users" passHref>
                  <NavLink>Lista de Usuarios</NavLink>
                </Link>
              </NavItem>
            )}
            <NavItem>
              <Button
                color="plain"
                onClick={() =>
                  swal(`Hola!`, 'Nos alegra que estes aca!', 'success')
                }
              >
                Bienvenido!
              </Button>
            </NavItem>
            <NavItem>
              <Button color="danger" onClick={logOut}>
                Salir
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
Header.propTypes = {
  edit: PropTypes.bool,
  create: PropTypes.bool,
}
export default Header
