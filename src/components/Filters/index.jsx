import React from "react";
import { SLIDER_MAX_VALUE } from "../../utils/vars";
import Slider from "@mui/material/Slider";
import { Col, Row } from "react-bootstrap";
import "./style.scss";

const Filters = ({ check, filteringItems, handleChange }) => {
  return (
    <div className="filters">
      <h3 className="section__title">Costs</h3>
      {Object.keys(filteringItems).map((item) => (
        <Row key={item}>
          <Col lg={5} md={8} sm={12}>
            <div className="flex align-items-center filters">
              <label className="checkbox flex align-item-center">
                <input
                  type="checkbox"
                  className="check_box"
                  onChange={() => check(item)}
                  checked={filteringItems[item].isFiltering ? "checked" : ""}
                />
                <span className="checkmark" />
                <span className="label__text">{item}</span>
              </label>
              <Slider
                size="small"
                disabled={!filteringItems[item].isFiltering}
                value={filteringItems[item].value}
                name={item}
                aria-label={"small"}
                onChange={handleChange}
                max={SLIDER_MAX_VALUE}
                valueLabelDisplay="auto"
              />
              <span className="slider__value">
                {filteringItems[item].value ? filteringItems[item].value : "-"}
              </span>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Filters;
