import React from "react";
import { Form, Field } from "react-final-form";
import css from "./SignupForm.module.css";
const required = (value) => (value ? undefined : "Required");
export default function SignupForm({ error, loading, onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        invalid,
        pristine,
        values,
      }) => (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.eachField}>
            <label>Full Name</label>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="Full Name"
              validate={required}
            />
          </div>
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

          {error ? <p className={css.error}>User already exists</p> : null}

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
