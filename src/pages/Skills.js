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
  FaFireAlt,
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
import "../../src/Skills.css";

const skills = [
  {
    category: "Front-End",
    skills: [
      {
        name: "React",
        icon: <FaReact size={40} color="#61DBFB" />,
        description:
          "Desarrollé aplicaciones web dinámicas y responsivas en ICESA Retail, utilizando React para la construcción de interfaces de usuario eficientes.",
      },
      {
        name: "Angular",
        icon: <FaAngular size={40} color="#DD0031" />,
        description:
          "Implementé aplicaciones empresariales en CRESA Retail, gestionando proyectos que requerían el uso intensivo de Angular para un front-end robusto.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={40} color="#007ACC" />,
        description:
          "Utilicé TypeScript para mejorar la mantenibilidad y escalabilidad del código en proyectos complejos en CRESA Retail, asegurando un desarrollo limpio y seguro.",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt size={40} color="#1572B6" />,
        description:
          "Apliqué técnicas avanzadas de CSS en la creación de interfaces de usuario estilizadas y responsivas, optimizadas para diversos dispositivos en ICESA Retail.",
      },
      {
        name: "React Native",
        icon: <FaReact size={40} color="#61DBFB" />,
        description:
          "Construí aplicaciones móviles multiplataforma con React Native, mejorando la experiencia del usuario en entornos tanto Android como iOS.",
      },
      {
        name: "AJAX",
        icon: <FaCloud size={40} color="#F7DF1E" />,
        description:
          "Implementé soluciones AJAX para mejorar la experiencia de usuario en aplicaciones web, permitiendo interacciones más rápidas y fluidas.",
      },
    ],
  },
  {
    category: "Back-End",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={40} color="#68A063" />,
        description:
          "Desarrollé y mantuve APIs robustas y eficientes con Node.js, permitiendo una integración fluida con el front-end y sistemas de terceros en CRESA Retail.",
      },
      {
        name: "PHP",
        icon: <SiPhp size={40} color="#777BB4" />,
        description:
          "Desarrollé backend para aplicaciones empresariales utilizando PHP, con un enfoque en la integración de sistemas legacy en ICESA Retail.",
      },
      {
        name: "Laravel",
        icon: <SiLaravel size={40} color="#FF2D20" />,
        description:
          "Lideré la migración de sistemas hacia Laravel en CRESA Retail, mejorando la eficiencia del backend y la seguridad de las aplicaciones.",
      },
      {
        name: "C#",
        icon: <SiCsharp size={40} color="#239120" />,
        description:
          "Desarrollé aplicaciones de escritorio y web con C#, optimizando procesos empresariales en CRESA Retail.",
      },
      {
        name: ".NET Core",
        icon: <FaServer size={40} color="#512BD4" />,
        description:
          "Desarrollé servicios backend con .NET Core, proporcionando soluciones escalables y de alto rendimiento para CRESA Retail.",
      },
      {
        name: "Firebase",
        icon: <FaFireAlt size={40} color="#FFCA28" />,
        description:
          "Implementación de servicios en la nube y autenticación de usuarios utilizando Firebase en proyectos de aplicaciones móviles.",
      },
      {
        name: "Python",
        icon: <FaPython size={40} color="#306998" />,
        description:
          "Desarrollé un sistema de generación de firmas electrónicas utilizando Python, mejorando significativamente el tiempo de respuesta y la calidad del código en procesos críticos de ICESA Retail.",
      },
    ],
  },
  {
    category: "Bases de Datos",
    skills: [
      {
        name: "Oracle (PL/SQL)",
        icon: <SiOracle size={40} color="#F80000" />,
        description:
          "Manejo de bases de datos Oracle con PL/SQL para la creación de procedimientos almacenados y optimización de consultas en CRESA Retail.",
      },
      {
        name: "Stored Procedures",
        icon: <FaDatabase size={40} color="#003B5C" />,
        description:
          "Desarrollé procedimientos almacenados para SQL Server, mejorando la eficiencia de las consultas y el manejo de datos en ICESA Retail.",
      },
      {
        name: "SQL Server",
        icon: <FaServer size={40} color="#CC2927" />,
        description:
          "Gestión y optimización de bases de datos SQL Server, garantizando un rendimiento óptimo en aplicaciones críticas en ICESA Retail.",
      },
    ],
  },
  {
    category: "Sistemas Empresariales",
    skills: [
      {
        name: "SAP",
        icon: <SiSap size={40} color="#00327F" />,
        description:
          "Integración de sistemas SAP con aplicaciones existentes en CRESA Retail, mejorando la conectividad y flujo de datos en la empresa.",
      },
      {
        name: "GitHub",
        icon: <FaGithub size={40} color="#181717" />,
        description:
          "Gestión de repositorios y control de versiones utilizando GitHub, asegurando la colaboración efectiva en equipos de desarrollo.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-background">
      <Container className="my-5">
        <h2 className="text-center mb-5">Mis Habilidades</h2>
        {skills.map((skillCategory, index) => (
          <div key={index}>
            <h3 className="text-center mb-4">{skillCategory.category}</h3>
            <Row>
              {skillCategory.skills.map((skill, idx) => (
                <Col xs={12} md={6} lg={4} className="mb-4" key={idx}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="text-center shadow-sm skill-card bg-dark text-light">
                      <Card.Body className="d-flex flex-column align-items-center">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="mb-3"
                        >
                          {skill.icon}
                        </motion.div>
                        <Card.Title className="text-light">
                          {skill.name}
                        </Card.Title>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Card.Text className="text-light">
                            {skill.description}
                          </Card.Text>
                        </motion.div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Skills;
