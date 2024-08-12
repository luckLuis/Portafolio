import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import profileImage from "../yo.jpg";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={profileImage}
              alt="Perfil"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "200px", margin: "auto" }}
            />
          </Card>
        </Col>
        <Col md={8}>
          <h2 className="mb-4">Sobre mí</h2>
          <p className="lead">
            Soy un apasionado desarrollador con experiencia en tecnologías
            front-end y back-end. Mi trayectoria abarca desde el desarrollo de
            aplicaciones web interactivas con React y Angular hasta la creación
            de robustos sistemas de backend con PHP Laravel y C#. Mi enfoque
            está en construir soluciones eficientes, escalables y centradas en
            el usuario.
          </p>
          <p>
            Me gusta enfrentar desafíos técnicos y encontrar soluciones
            innovadoras. Fuera del trabajo, disfruto aprendiendo nuevas
            tecnologías y colaborando con otros profesionales del sector para
            seguir creciendo y mejorar mis habilidades.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
