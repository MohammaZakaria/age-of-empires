import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import NotFounded from "../containers/NotFounded";
import UnitDetails from "../containers/UnitDetails";
import Units from "../containers/Units";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="units" element={<Units />} />
      <Route path="units/:id" element={<UnitDetails />} />
      <Route path="*" element={<NotFounded />} />
    </Routes>
  );
};

export default PublicRoutes;
