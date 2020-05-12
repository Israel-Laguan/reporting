import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Router from "next/router";
import swal from "sweetalert";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
} from "reactstrap";

const Header = ({ editReport, etl, createReport, createUser, users, auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBoss, setIsBoss] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const logOut = () => {
    auth.logout();
    Router.push("/login");
  };

  React.useEffect(() => {
    const userRole = localStorage.getItem("user_role");
    if (userRole === "ADMIN") setIsAdmin(true);
    if (userRole === "BOSS") setIsBoss(true);
  }, []);
  return (
    <Container style={{ backgroundColor: "#F56D03" }} fluid>
      <Navbar dark expand="md" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/" passHref>
          <a className="navbar-brand">🗒️ Reportes</a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {editReport && isAdmin && (
              <NavItem>
                <Link href={`/edit-report/${editReport}`} passHref>
                  <NavLink>✏️ Editar</NavLink>
                </Link>
              </NavItem>
            )}
            {createReport && (
              <NavItem>
                <Link href="/new-report" passHref>
                  <NavLink>📝 Crear Reporte</NavLink>
                </Link>
              </NavItem>
            )}
            <NavItem>
              <Link
                href="https://app.powerbi.com/reportEmbed?reportId=85932398-1df6-40bb-87ac-b6e7f4d2d530&autoAuth=true&ctid=c26c8126-bddb-4012-a85c-7f7475201518&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D"
                passHref
              >
                <NavLink>📝 Ver Reporte</NavLink>
              </Link>
            </NavItem>

            {createUser && isAdmin && (
              <NavItem>
                <Link href="/new-user" passHref>
                  <NavLink>👤 Crear Usuario</NavLink>
                </Link>
              </NavItem>
            )}
            {createUser && isBoss && (
              <NavItem>
                <Link href="/new-user" passHref>
                  <NavLink>👤 Crear Usuario</NavLink>
                </Link>
              </NavItem>
            )}
            {users && isAdmin && (
              <NavItem>
                <Link href="/users" passHref>
                  <NavLink>📋 Lista de Usuarios</NavLink>
                </Link>
              </NavItem>
            )}
            {etl ? (
              <NavItem>
                <Link href="/etl" passHref>
                  <NavLink>📚 ETL</NavLink>
                </Link>
              </NavItem>
            ) : null}
            <NavItem>
              <Button
                color="plain"
                onClick={() =>
                  swal(`🤗\nHola!`, "Nos alegra que estes aca! ❤️", "success")
                }
              >
                Bienvenido!
              </Button>
            </NavItem>
            <NavItem>
              <Link href="/instructions" passHref>
                <NavLink className="btn btn-info btn-sm">ℹ️</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Button color="danger" onClick={logOut}>
                🚪 Salir
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};
Header.propTypes = {
  edit: PropTypes.bool,
  create: PropTypes.bool,
};
export default Header;
