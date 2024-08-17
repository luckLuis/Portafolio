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
import "../../src/Skills.css"; // Agrega el archivo CSS para los estilos personalizados

const skills = [
  // Front-End Technologies
  { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
  { name: "Angular", icon: <FaAngular size={50} color="#DD0031" /> },
  { name: "TypeScript", icon: <SiTypescript size={50} color="#007ACC" /> },
  { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} color="#68A063" /> },
  { name: "React Native", icon: <FaReact size={50} color="#61DBFB" /> },
  {
    name: "Front-End Development",
    icon: <FaReact size={50} color="#61DBFB" />,
  },

  // Back-End Technologies
  { name: "PHP", icon: <SiPhp size={50} color="#777BB4" /> },
  { name: "Laravel", icon: <SiLaravel size={50} color="#FF2D20" /> },
  { name: "C#", icon: <SiCsharp size={50} color="#239120" /> },
  { name: "Python", icon: <FaPython size={50} color="#306998" /> },
  { name: "AJAX", icon: <FaCloud size={50} color="#F7DF1E" /> },
  { name: ".NET Core", icon: <FaServer size={50} color="#512BD4" /> },
  { name: "Syscards", icon: <FaServer size={50} color="#512BD4" /> },

  // Database Technologies
  { name: "Oracle (PL/SQL)", icon: <SiOracle size={50} color="#F80000" /> },
  { name: "Stored Procedures", icon: <FaDatabase size={50} color="#003B5C" /> },
  { name: "Database Scripts", icon: <FaDatabase size={50} color="#003B5C" /> },
  { name: "SQL Server", icon: <FaServer size={50} color="#CC2927" /> },

  // Other Technologies
  { name: "SAP", icon: <SiSap size={50} color="#00327F" /> },
  { name: "GitHub", icon: <FaGithub size={50} color="#181717" /> },
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
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                  backgroundColor: "#f0f0f0",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center skill-card">
                  <Card.Body>
                    <div className="mb-3" style={{ fontSize: "3rem" }}>
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
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                  backgroundColor: "#f0f0f0",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center skill-card">
                  <Card.Body>
                    <div className="mb-3" style={{ fontSize: "3rem" }}>
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
              "SQL Server",
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
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                  backgroundColor: "#f0f0f0",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center skill-card">
                  <Card.Body>
                    <div className="mb-3" style={{ fontSize: "3rem" }}>
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
                  scale: 1.05,
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                  backgroundColor: "#f0f0f0",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center skill-card">
                  <Card.Body>
                    <div className="mb-3" style={{ fontSize: "3rem" }}>
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
