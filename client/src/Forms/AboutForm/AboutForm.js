import React from "react";
import css from "./AboutForm.module.css";
import { Form, Field } from "react-final-form";
const required = (value) => (value ? undefined : "Required");

export default function AboutForm(props) {
  return (
    <form className={css.form} onSubmit={props.handleSubmit}>
      <div className={css.row}>
        <div className={css.eachField}>
          <b>Company Name:</b>
          <Field
            className={css.field}
            name="companyName"
            component="input"
            type="text"
            placeholder="Company Name"
            validate={required}
          />
        </div>
      </div>

      <div className={css.row}>
        <div className={css.eachField}>
          <b>Industry:</b>
          <Field
            className={css.field}
            name="industry"
            component="input"
            type="text"
            placeholder="Industry Name"
          />
        </div>
      </div>

      <div className={css.row}>
        <div className={css.eachField}>
          <b>Description:</b>
          <Field
            className={css.field}
            name="description"
            component="textarea"
            placeholder="Description"
          />
        </div>
      </div>
      <div className={css.row}>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Website:</b>
          <Field
            className={css.field}
            name="website"
            component="input"
            type="text"
            placeholder="Website "
          />
        </div>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Employee Strength:</b>
          <Field
            className={css.field}
            name="employeeStrength"
            component="input"
            type="number"
            placeholder="Strength "
          />
        </div>
        <div className={css.buttonsContainer}>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.form.batch(() => {
                props.form.change("companyName", "");
                props.form.change("industry", "");
                props.form.change("description", "");
                props.form.change("website", "");
                props.form.change("employeeStrength", "");
              });
            }}
          >
            Clear
          </button>
          <button
            className="btn btn-primary"
            type="button"
            disabled={!props.values.companyName}
            onClick={props.handleSubmit}
          >
            {props.nextLabel}
          </button>
        </div>
      </div>
    </form>
  );
}
