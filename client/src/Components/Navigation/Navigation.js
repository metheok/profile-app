import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BsBuildingAdd } from "react-icons/bs";

import css from "./Navigation.module.css";

function Navigation({ user, company, logOut }) {
  const avatarText =
    user.name.split(" ")[0].charAt(0).toUpperCase() +
    user.name.split(" ")[1].charAt(0).toUpperCase();
  return (
    <div className={css.root}>
      <div className={css.profileContainer}>
        <div className={css.avatarContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            version="1.1"
          >
            <circle
              fill="#007bff"
              width="64"
              height="64"
              cx="32"
              cy="32"
              r="32"
            />
            <text
              x="50%"
              y="50%"
              style={{ color: "#ffffff", "line-height": 1 }}
              alignment-baseline="middle"
              text-anchor="middle"
              font-size="26"
              font-weight="400"
              dy=".1em"
              dominant-baseline="middle"
              fill="#ffffff"
            >
              {avatarText}
            </text>
          </svg>
        </div>
        <b className={css.name}>{user.name}</b>
      </div>
      <div className={css.linksContainer}>
        {" "}
        <Link className={css.link} to="/dashboard">
          <BsBuildingAdd className={css.icon} />
          <span>Company details</span>{" "}
        </Link>
      </div>
      <div className={css.authLinksContainer}>
        <a className={css.link} onClick={() => logOut()} to="/dashboard">
          <FiLogOut className={css.icon} />
          <span>Logout </span>{" "}
        </a>
      </div>{" "}
    </div>
  );
}
export default Navigation;
