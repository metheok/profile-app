import React from "react";
import css from "./login.module.css";
import { Link } from "react-router-dom";
export default function login() {
  return (
    <div className={css.root}>
      <div className={css.formContainer}>
        <h4>Login</h4>
        <div>
          <Link to="/signup">signup</Link>
        </div>
      </div>
    </div>
  );
}
