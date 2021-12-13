import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <PublicRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
