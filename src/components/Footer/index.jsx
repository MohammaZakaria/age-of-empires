import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <small className="footer__text">
              <span className="colored">Developed by:</span> Mohammed Alalaya 😎
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
