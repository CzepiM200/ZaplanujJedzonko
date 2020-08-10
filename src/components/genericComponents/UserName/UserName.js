import React from "react";
import "./_userName.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const UserName = () => {
  return (
    <div className="user">
      <span className="user__name">
        {localStorage.getItem("savedName")
          ? localStorage.getItem("savedName")
          : "Imię"}
      </span>
      <span className="user__icon">
        <FontAwesomeIcon icon={faUserCircle} />
      </span>
    </div>
  );
};

export default UserName;
