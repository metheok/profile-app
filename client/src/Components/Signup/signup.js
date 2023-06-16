import React from "react";
import css from "./signup.module.css";
import { Link } from "react-router-dom";

export default function signup() {
  return (
    <div className={css.root}>
      <div className={css.formContainer}>
        <h4>Signup</h4>

        <div>
          <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
}
