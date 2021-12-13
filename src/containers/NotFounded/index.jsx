import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { usePageTitle } from "../../hooks/usePageTitle";

const NotFounded = () => {
  const [setCurrentTitle] = usePageTitle();
  useEffect(() => {
    setCurrentTitle("Page not founded");
  }, []);

  return (
    <section className="page__bg flex align-items-center justify-center">
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className="not__found__message text__align__center">
              <span className="colored">404 </span> in valid url, This page Not
              Found
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFounded;
