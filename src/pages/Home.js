import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import profileImage from "../yo.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../src/Home.css";

const InfoCard = ({ title, text }) => (
  <motion.div
    className="d-inline-block border rounded-lg shadow-sm card-section"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h4 className="card-title mb-3">{title}</h4>
    <p className="card-text">{text}</p>
  </motion.div>
);

const Home = () => {
  return (
    <Container fluid className="my-5 px-4 container-custom">
      <Row className="align-items-center justify-content-center text-center">
        <Col md={5} className="mb-4 d-flex justify-content-center">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="border-0 shadow-lg rounded-circle profile-card">
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
            className="display-3 mb-4 font-weight-bold text-primary"
            style={{ lineHeight: "1.2" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
          >
            Bienvenido a mi Portafolio
          </motion.h1>
          <motion.p
            className="lead mb-4 text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Soy un desarrollador front-end con experiencia en React, Angular, y
            TypeScript. Me especializo en crear interfaces de usuario elegantes
            y funcionales, transformando diseños complejos en aplicaciones web
            interactivas con un enfoque en la experiencia del usuario y el
            diseño responsivo.
          </motion.p>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/contacto"
              className="rounded-pill shadow-sm"
            >
              Contáctame <FaArrowRight className="ms-2" />
            </Button>
          </motion.div>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col className="d-flex justify-content-center flex-wrap">
          <InfoCard
            title="Diseño Moderno"
            text="Implemento las últimas tendencias en diseño web para asegurar una experiencia visualmente atractiva."
          />
          <InfoCard
            title="Performance Óptima"
            text="Optimizo cada aspecto de la aplicación para ofrecer un rendimiento excepcional en todos los dispositivos."
          />
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
