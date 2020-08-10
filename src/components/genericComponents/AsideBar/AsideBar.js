import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./_asideBar.scss";

const AsideBar = () => {
  return (
    <aside className="aside">
      <nav className="aside__nav">
        <ul className="aside__menu">
          <NavLink
            to="/dashboard/desktop"
            className="aside__link"
            activeClassName="active"
          >
            <li className="aside__item">
              Pulpit
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </li>
          </NavLink>

          <NavLink
            to="/dashboard/recipes"
            className="aside__link"
            activeClassName="active"
          >
            <li className="aside__item">
              Przepisy
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </li>
          </NavLink>
          <NavLink
            to="/dashboard/plan"
            className="aside__link"
            activeClassName="active"
          >
            <li className="aside__item">
              Plan
              <span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideBar;
