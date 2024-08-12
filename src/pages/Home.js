import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from "../yo.jpg";

const Home = () => {
  return (
    <Container className="my-5 text-center">
      <Row className="align-items-center">
        <Col md={6} className="mb-4">
          <img
            src={profileImage}
            alt="Perfil"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "200px" }}
          />
        </Col>
        <Col md={6}>
          <h1 className="display-4 mb-4">Bienvenido a mi Portafolio</h1>
          <p className="lead mb-4">
            Soy un desarrollador Full Stack especializado en React, Angular,
            TypeScript, PHP Laravel y C#.
          </p>
          <Button variant="primary" size="lg" href="#contact">
            Contáctame
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
