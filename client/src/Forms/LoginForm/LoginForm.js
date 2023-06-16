import React from "react";
import { Form, Field } from "react-final-form";
import css from "./LoginForm.module.css";
const required = (value) => (value ? undefined : "Required");
export default function LoginForm({ error, loading, onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        invalid,
        values,
      }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.eachField}>
            <label>Username</label>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Username"
              validate={required}
            />
          </div>
          <div className={css.eachField}>
            <label>Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              validate={required}
            />
          </div>

          {error ? <p className={css.error}>Invalid Credentials</p> : null}

          <div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={submitting || invalid || pristine}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
}
