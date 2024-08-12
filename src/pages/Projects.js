import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description:
        "Descripción detallada del proyecto 1. Incluye las tecnologías utilizadas, el propósito del proyecto y los resultados obtenidos.",
      link: "#", // Agrega el enlace del proyecto
    },
    {
      id: 2,
      title: "Proyecto 2",
      description:
        "Descripción detallada del proyecto 2. Incluye las tecnologías utilizadas, el propósito del proyecto y los resultados obtenidos.",
      link: "#", // Agrega el enlace del proyecto
    },
    // Agrega más proyectos aquí
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Mis Proyectos</h2>
      <Row>
        {projects.map((project) => (
          <Col md={6} lg={4} className="mb-4" key={project.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="mb-3">{project.title}</Card.Title>
                <Card.Text className="mb-4">{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  Ver Proyecto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
