import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const PageTitle = () => {
  const { pageTitle } = useSelector((state) => state.page);

  return (
    <h2 className="page__title">
      {pageTitle ? pageTitle.toUpperCase() : "Loading"}
    </h2>
  );
};

export default PageTitle;
