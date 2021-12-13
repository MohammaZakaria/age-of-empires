import React from "react";
import "./style.scss";

const UnitsDetailsTable = ({ unit }) => {
  return (
    <div>
      <table className="public__table__design">
        <tr>
          <th className="details_table_side_header">Id:</th>
          <td>{unit?.id}</td>
        </tr>
        <tr>
          <th className="details_table_side_header">Name:</th>
          <td className="details_table_side_header">{unit?.name}</td>
        </tr>
        <tr>
          <th className="details_table_side_header">Description:</th>
          <td>{unit?.description}</td>
        </tr>
        <tr>
          <th className="details_table_side_header">Min. Required age:</th>
          <td>{unit.age}</td>
        </tr>
        {unit.cost &&
          Object.keys(unit.cost).map((item) => (
            <tr>
              <th className="details_table_side_header">{item}:</th>
              <td>{unit.cost[item]}</td>
            </tr>
          ))}
        {unit.build_time && (
          <tr>
            <th className="details_table_side_header">Build time:</th>
            <td>{unit.build_time}</td>
          </tr>
        )}
        {unit.reload_time && (
          <tr>
            <th className="details_table_side_header">Reload time:</th>
            <td>{unit.reload_time}</td>
          </tr>
        )}
        {unit.hit_points && (
          <tr>
            <th className="details_table_side_header">Hit Points:</th>
            <td>{unit.hit_points}</td>
          </tr>
        )}
        {unit.attack && (
          <tr>
            <th className="details_table_side_header">Attack:</th>
            <td>{unit.attack}</td>
          </tr>
        )}
        {unit.accuracy && (
          <tr>
            <th className="details_table_side_header">Hit Accuracy:</th>
            <td>{unit.accuracy}</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default UnitsDetailsTable;
