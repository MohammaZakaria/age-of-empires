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
              <span className="colored">Developed by:</span>
              {/* eslint-disable-next-line */}
              <a
                className="link_to_github"
                href="https://github.com/MohammaZakaria/age-of-empires"
                target="_blank"
              >
                {" "}
                Mohammed Alalaya 😎
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
