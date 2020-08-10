import React from "react";
import { Link } from "react-router-dom";
import "./_header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo">
        <span className="header__first">Zaplanuj</span>
        <span className="header__second">Jedzonko</span>
      </div>

      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__item">
            <Link></Link>
            <a href="#"> Zaplanuj posiłki!</a>
          </li>
          <li className="header__item">
            <a href="#"> Dlaczego warto? </a>
          </li>
          <li className="header__item">
            <a href="#"> O mnie </a>
          </li>
          <li className="header__item">
            <a href="#"> Kontakt </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
