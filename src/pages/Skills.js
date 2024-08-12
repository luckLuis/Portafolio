import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const skills = ["React", "Angular", "TypeScript", "PHP", "Laravel", "C#"];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="mb-4">Mis Habilidades</h2>
          <ul className="list-group">
            {skills.map((skill, index) => (
              <li key={index} className="list-group-item">
                {skill}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
