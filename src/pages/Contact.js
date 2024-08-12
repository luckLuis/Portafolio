import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

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
    <Container className="my-5">
      <h2 className="mb-4">Contáctame</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Nombre</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="message">Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            id="message"
            name="message"
            placeholder="Mensaje"
            value={message}
            onChange={handleChange}
            rows={4}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
