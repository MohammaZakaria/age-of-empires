import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UnitsDetailsTable from "../../components/UnitsDetailsTable";
import { usePageTitle } from "../../hooks/usePageTitle";
import { setUnit } from "../../store/slices/unitDetailsSlice";

const UnitDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { unit } = useSelector((state) => state.unitDetails);
  const [setCurrentTitle] = usePageTitle();

  useEffect(() => {
    setCurrentTitle(`${unit ? unit.name : "Not found"} unit details`);
  }, [unit]);

  useEffect(() => {
    (async () => {
      dispatch(setUnit(params.id));
      // make sure page scroll up when first render
      window.scrollTo(0, 0);
    })();
  }, [dispatch, params]);

  return (
    <section className="page__bg flex align-items-center justify-center">
      <Container>
        <Row>
          {unit ? (
            <Col>
              <UnitsDetailsTable unit={unit} />
            </Col>
          ) : (
            <Col lg={5} sm={12}>
              <h3 className="not__found__message">
                Sorry we can't find a unit with the proposed id. Make sure you
                choose a valid empire
              </h3>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default UnitDetails;
