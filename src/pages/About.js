import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import profileImage from "../yo.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container fluid className="my-5 px-4">
      <Row className="align-items-center justify-content-center">
        <Col md={4} className="mb-4 d-flex justify-content-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="border-0 shadow-lg">
              <Card.Img
                variant="top"
                src={profileImage}
                alt="Perfil"
                className="img-fluid rounded-circle"
                style={{ maxWidth: "200px", border: "4px solid #e0e0e0" }}
              />
            </Card>
          </motion.div>
        </Col>
        <Col md={8}>
          <motion.h2
            className="mb-4 text-primary"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
          >
            Sobre mí
          </motion.h2>
          <motion.p
            className="lead text-secondary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Soy un apasionado desarrollador con experiencia en tecnologías
            front-end y back-end. Mi trayectoria abarca desde el desarrollo de
            aplicaciones web interactivas con React y Angular hasta la creación
            de robustos sistemas de backend con PHP Laravel y C#. Mi enfoque
            está en construir soluciones eficientes, escalables y centradas en
            el usuario.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Me gusta enfrentar desafíos técnicos y encontrar soluciones
            innovadoras. Fuera del trabajo, disfruto aprendiendo nuevas
            tecnologías y colaborando con otros profesionales del sector para
            seguir creciendo y mejorar mis habilidades.
          </motion.p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
