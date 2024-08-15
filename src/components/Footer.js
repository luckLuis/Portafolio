import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>
              &copy; 2024 Luis Antonio Jacome. Todos los derechos reservados.
            </p>
            <div className="d-flex justify-content-center mt-3">
              {/* <a
                href="https://facebook.com"
                className="text-light mx-2"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-light mx-2"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a> */}
              <a
                href="https://www.linkedin.com/in/luis-antonio-jacome-334b7219a/"
                className="text-light mx-2"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
