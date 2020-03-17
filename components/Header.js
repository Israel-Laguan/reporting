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

const Header = ({ edit, create }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link href="/">
          <NavbarBrand href="/">Reporte</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {edit && (
              <NavItem>
                <NavLink href="/edit">Editar</NavLink>
              </NavItem>
            )}
            {create && (
              <NavItem>
                <NavLink href="/new">Crear Reporte</NavLink>
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
