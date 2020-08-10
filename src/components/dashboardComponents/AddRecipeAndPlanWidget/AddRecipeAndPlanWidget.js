import React from "react";
import "../AddRecipeAndPlanWidget/_addRecipeAndPlanWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const AddRecipeAndPlanWidget = () => {
  return (
    <section className="widgets">
      <NavLink to="/dashboard/recipes/new">
        <div className="widgets__item widget__add--recipe">
          <span className="widgets__icon">
            <FontAwesomeIcon icon={faPlusSquare} color="#468966" />
          </span>
          <p> dodaj przepis </p>
        </div>
      </NavLink>
      <NavLink to="/dashboard/plan/new">
        <div className="widgets__item widget__add--plan">
          <span className="widgets__icon">
            <FontAwesomeIcon icon={faPlusSquare} color="#468966" />
          </span>
          <p>dodaj plan</p>
        </div>
      </NavLink>
    </section>
  );
};
export default AddRecipeAndPlanWidget;
