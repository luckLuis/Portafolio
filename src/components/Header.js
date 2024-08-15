import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../src/Header.css";

function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Inicio", path: "/" },
    // { name: "Sobre mí", path: "/sobre-mi" },
    { name: "Habilidades", path: "/habilidades" },
    // { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Mi Sitio Web
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mx-2"
              >
                <Nav.Link
                  as={Link}
                  to={item.path}
                  className={`text-white fw-semibold ${
                    location.pathname === item.path ? "active-link" : ""
                  }`}
                >
                  {item.name}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
