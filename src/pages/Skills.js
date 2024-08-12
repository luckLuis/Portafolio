import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCss3Alt,
  FaGithub,
  FaCloud,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiOracle,
  SiSap,
  SiCsharp,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  // Front-End Technologies
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Angular", icon: <FaAngular size={50} /> },
  { name: "TypeScript", icon: <SiTypescript size={50} /> },
  { name: "CSS", icon: <FaCss3Alt size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "React Native", icon: <FaReact size={50} /> },
  { name: "Front-End Development", icon: <FaReact size={50} /> },

  // Back-End Technologies
  { name: "PHP", icon: <SiPhp size={50} /> },
  { name: "Laravel", icon: <SiLaravel size={50} /> },
  { name: "C#", icon: <SiCsharp size={50} /> },
  { name: "Python", icon: <FaPython size={50} /> },
  { name: "AJAX", icon: <FaCloud size={50} /> },
  { name: ".NET Core", icon: <FaServer size={50} /> },
  { name: "Syscards", icon: <FaServer size={50} /> },
  { name: "API Creation and Consumption", icon: <FaCloud size={50} /> },

  // Database Technologies
  { name: "Oracle (PL/SQL)", icon: <SiOracle size={50} /> },
  { name: "Stored Procedures", icon: <FaDatabase size={50} /> },
  { name: "Database Scripts", icon: <FaDatabase size={50} /> },

  // Other Technologies
  { name: "SAP", icon: <SiSap size={50} /> },
  { name: "GitHub", icon: <FaGithub size={50} /> },
];

const Skills = () => {
  return (
    <Container className="my-5 px-4">
      <h2 className="mb-5 text-center text-primary">Mis Habilidades</h2>
      <Row className="justify-content-center">
        <Col xs={12} className="mb-4">
          <h3 className="text-center text-secondary mb-4">
            Tecnologías Front-End
          </h3>
        </Col>
        {skills
          .filter((skill) =>
            [
              "React",
              "Angular",
              "TypeScript",
              "CSS",
              "Node.js",
              "React Native",
              "Front-End Development",
            ].includes(skill.name)
          )
          .map((skill, index) => (
            <Col
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
              key={index}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center shadow-lg border-light rounded-lg p-4">
                  <Card.Body>
                    <div
                      className="mb-3 text-primary"
                      style={{ fontSize: "3rem" }}
                    >
                      {skill.icon}
                    </div>
                    <Card.Title className="text-dark mt-2">
                      {skill.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}

        <Col xs={12} className="mb-4">
          <h3 className="text-center text-secondary mb-4">
            Tecnologías de Backend
          </h3>
        </Col>
        {skills
          .filter((skill) =>
            [
              "PHP",
              "Laravel",
              "C#",
              "Python",
              "AJAX",
              ".NET Core",
              "Syscards",
              "API Creation and Consumption",
            ].includes(skill.name)
          )
          .map((skill, index) => (
            <Col
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
              key={index}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center shadow-lg border-light rounded-lg p-4">
                  <Card.Body>
                    <div
                      className="mb-3 text-primary"
                      style={{ fontSize: "3rem" }}
                    >
                      {skill.icon}
                    </div>
                    <Card.Title className="text-dark mt-2">
                      {skill.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}

        <Col xs={12} className="mb-4">
          <h3 className="text-center text-secondary mb-4">
            Tecnologías de Bases de Datos
          </h3>
        </Col>
        {skills
          .filter((skill) =>
            [
              "Oracle (PL/SQL)",
              "Stored Procedures",
              "Database Scripts",
            ].includes(skill.name)
          )
          .map((skill, index) => (
            <Col
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
              key={index}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center shadow-lg border-light rounded-lg p-4">
                  <Card.Body>
                    <div
                      className="mb-3 text-primary"
                      style={{ fontSize: "3rem" }}
                    >
                      {skill.icon}
                    </div>
                    <Card.Title className="text-dark mt-2">
                      {skill.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}

        <Col xs={12} className="mb-4">
          <h3 className="text-center text-secondary mb-4">Otras Tecnologías</h3>
        </Col>
        {skills
          .filter((skill) => ["SAP", "GitHub"].includes(skill.name))
          .map((skill, index) => (
            <Col
              md={4}
              lg={3}
              className="mb-4 d-flex justify-content-center"
              key={index}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center shadow-lg border-light rounded-lg p-4">
                  <Card.Body>
                    <div
                      className="mb-3 text-primary"
                      style={{ fontSize: "3rem" }}
                    >
                      {skill.icon}
                    </div>
                    <Card.Title className="text-dark mt-2">
                      {skill.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Skills;
