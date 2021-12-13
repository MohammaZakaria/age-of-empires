import React, { useState, useEffect } from "react";
import puff from "./../../assets/icons/puff.svg";
import "./style.scss";

const Preload = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoad(true);
      }, 500);
    });
  }, []);

  return (
    <div className={`preloader__wrap ${load && "loaded"}`}>
      <div className="flex align-items-center justify-center flex-dr-column">
        <img src={puff} alt="spinier" />
      </div>
    </div>
  );
};

export default Preload;
