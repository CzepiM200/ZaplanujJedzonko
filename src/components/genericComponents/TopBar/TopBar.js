import React from "react";
import { Link } from "react-router-dom";
import "./_topBar.scss";
import Logo from "../Logo/Logo";
import UserName from "../UserName/UserName";

const TopBar = () => (
  <div className="top-bar">
    <Link to="/">
      <Logo />
    </Link>

    <UserName />
  </div>
);

export default TopBar;
