import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = ({ editReport, createReport, createUser, editUser, users }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" style={{ backgroundColor: "#F56D03" }}>
        <Link href="/">
          <NavLink style={{ color: "white" }}>Reporte</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {editReport && (
              <NavItem>
                <Link href="/edit">
                  <NavLink>Editar</NavLink>
                </Link>
              </NavItem>
            )}
            {createReport && (
              <NavItem>
                <Link href="/new">
                  <NavLink>Crear Reporte</NavLink>
                </Link>
              </NavItem>
            )}
            {createUser && (
              <NavItem>
                <Link href="/new-user">
                  <NavLink>Crear Usuario</NavLink>
                </Link>
              </NavItem>
            )}
            {users && (
              <NavItem>
                <Link href="/users" passHref>
                  <NavLink>Lista de Usuarios</NavLink>
                </Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
Header.propTypes = {
  edit: PropTypes.bool,
  create: PropTypes.bool
};
export default Header;
