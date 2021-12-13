import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";
const Hero = () => {
  return (
    <section className="hero">
      <div className="over__lay__bg__color"></div>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="hero__content">
              <h2 className="hero__title">Age of empires</h2>
              <p className="hero__description">
                Age of Empires is a series of historical real-time strategy
                video games, originally developed by Ensemble Studios and
                published by Xbox Game Studios. The first game was Age of
                Empires, released in 1997. Nine total games within the series
                have been released so far.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
