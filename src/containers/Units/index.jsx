import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Table from "../../components/Table";
import { filterEmpires, setEmpires } from "../../store/slices/empiresSlice";
import { units } from "./../../data.json";
import { INIT_FILTERS_ITEMS } from "../../utils/vars";
import Toggles from "../../components/Toggles";
import Filters from "../../components/Filters";
import { usePageTitle } from "../../hooks/usePageTitle";

const Units = () => {
  const dispatch = useDispatch();
  const [toggleLabels, setToggleLabels] = useState([]);
  const [toggle, setToggle] = useState("All");
  const [filteringItems, setFilteringItems] = useState(INIT_FILTERS_ITEMS);
  const [setCurrentTitle] = usePageTitle();
  useEffect(() => {
    setCurrentTitle("Units");
    // eslint-disable-next-line
  }, []);

  const handleChange = (event, newValue) => {
    // check if coming value is number
    if (typeof newValue === "number") {
      // get name of the changing slot
      const {
        target: { name },
      } = event;
      // change the value slot
      setFilteringItems({
        ...filteringItems,
        [name]: { ...filteringItems[name], value: newValue },
      });
    }
  };

  useEffect(() => {
    try {
      let contractedFilteringItems = {};
      Object.keys(filteringItems).forEach((item) => {
        if (filteringItems[item].isFiltering) {
          contractedFilteringItems[item] = filteringItems[item].value;
        }
      });
      dispatch(filterEmpires({ units, toggle, contractedFilteringItems }));
    } catch (error) {
      console.log("error :", error);
    }
  }, [dispatch, filteringItems, toggle]);

  useEffect(() => {
    try {
      // dispatch list to store
      dispatch(setEmpires(units));
      // select unique values to filter empires by them
      const unique = [...new Set(units.map((item) => item.age))];
      setToggleLabels(unique);
    } catch (error) {
      console.log("error :", error);
    }
    // eslint-disable-next-line
  }, [dispatch, units]);

  const check = (name) => {
    setFilteringItems({
      ...filteringItems,
      [name]: {
        ...filteringItems[name],
        isFiltering: !filteringItems[name].isFiltering,
        value: 0,
      },
    });
  };

  return (
    <section className="page__bg">
      <Container>
        <Row>
          <Col>
            {toggleLabels.length > 0 && (
              <Toggles
                handelToggle={(label) => setToggle(label)}
                toggle={toggle}
                toggleLabels={toggleLabels}
              />
            )}
            <Filters
              handleChange={handleChange}
              filteringItems={filteringItems}
              check={check}
            />
            <Table />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Units;
