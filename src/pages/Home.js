import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import profileImage from "../yo.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../src/Home.css";

const InfoCard = ({ title, text }) => (
  <motion.div
    className="card-section border-0 shadow-sm"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h4 className="card-title mb-3">{title}</h4>
    <p className="card-text">{text}</p>
  </motion.div>
);

const Home = () => {
  return (
    <Container fluid className="my-5 py-5 container-custom">
      <Row className="align-items-center justify-content-center text-center">
        <Col md={5} className="mb-4 d-flex justify-content-center">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="border-0 shadow-sm profile-card">
              <Card.Img
                src={profileImage}
                alt="Perfil"
                className="img-fluid rounded-circle profile-img"
              />
            </Card>
          </motion.div>
        </Col>
        <Col md={7}>
          <motion.h1
            className="display-4 mb-3 font-weight-bold text-dark"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
          >
            Bienvenido a mi Portafolio
          </motion.h1>
          <motion.p
            className="lead mb-4 text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Soy un desarrollador front-end especializado en React, Angular y
            TypeScript. Transformo diseños complejos en aplicaciones web
            funcionales, priorizando la experiencia del usuario y el diseño
            responsivo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button
              variant="outline-primary"
              size="lg"
              href="/contacto"
              className="rounded-pill px-4"
            >
              Contáctame <FaArrowRight className="ms-2" />
            </Button>
          </motion.div>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col md={4}>
          <InfoCard
            title="Diseño Moderno"
            text="Implemento las últimas tendencias en diseño web para asegurar una experiencia visualmente atractiva."
          />
        </Col>
        <Col md={4}>
          <InfoCard
            title="Performance Óptima"
            text="Optimizo cada aspecto de la aplicación para ofrecer un rendimiento excepcional en todos los dispositivos."
          />
        </Col>
        <Col md={4}>
          <InfoCard
            title="Experiencia Interactiva"
            text="Creo interfaces de usuario dinámicas que facilitan la interacción fluida y agradable."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
