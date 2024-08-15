import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado", formData);
  };

  return (
    <Container className="my-5 px-4">
      <h2 className="text-center mb-4 text-primary">Contáctame</h2>
      <motion.div
        className="p-4 bg-light rounded shadow-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={handleChange}
              required
              className="border-primary"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={handleChange}
              required
              className="border-primary"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí"
              value={message}
              onChange={handleChange}
              rows={4}
              required
              className="border-primary"
            />
          </Form.Group>
          <div className="text-center">
            <motion.button
              type="submit"
              className="btn btn-primary rounded-pill px-4 py-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Enviar
            </motion.button>
          </div>
        </Form>
      </motion.div>
    </Container>
  );
};

export default Contact;
