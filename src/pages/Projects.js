import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description:
        "Descripción detallada del proyecto 1. Incluye las tecnologías utilizadas, el propósito del proyecto y los resultados obtenidos.",
      link: "#",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description:
        "Descripción detallada del proyecto 2. Incluye las tecnologías utilizadas, el propósito del proyecto y los resultados obtenidos.",
      link: "#",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-5 text-center text-primary">Mis Proyectos</h2>
      <Row>
        {projects.map((project) => (
          <Col md={6} lg={4} className="mb-4" key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="h-100 shadow-lg border-light rounded-lg overflow-hidden">
                <Card.Body className="p-4">
                  <Card.Title className="mb-3 text-primary">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    href={project.link}
                    target="_blank"
                  >
                    Ver Proyecto
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
