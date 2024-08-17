import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../src/Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Inicio", path: "/", icon: faHome },
    { name: "Habilidades", path: "/habilidades", icon: faCode },
    { name: "Contacto", path: "/contacto", icon: faEnvelope },
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
                  onClick={() => navigate(item.path)}
                  className={`text-white fw-semibold ${
                    location.pathname === item.path ? "active-link" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="me-2" />
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
