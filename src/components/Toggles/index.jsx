import React from "react";
import "./style.scss";

const Toggles = ({ toggleLabels, toggle, handelToggle }) => {
  toggleLabels = ["All", ...toggleLabels];
  return (
    <div className="toggles">
      <h3 className="section__title">Ages</h3>
      <div className="toggles__wrapper align-items-center">
        {toggleLabels.map((age) => (
          <button
            onClick={() => handelToggle(age)}
            className={`toggle__button ${
              toggle === age ? "active" : "inactive"
            }`}
            key={age}
          >
            {age}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toggles;
