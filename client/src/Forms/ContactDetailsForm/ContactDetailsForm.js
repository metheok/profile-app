import React from "react";
import { Form, Field } from "react-final-form";

import css from "./ContactDetailsForm.module.css";
const required = (value) => (value ? undefined : "Required");

export default function ContactDetailsForm(props) {
  return (
    <form className={css.form} onSubmit={props.handleSubmit}>
      <div className={css.row}>
        <div style={{ width: "25%" }} className={css.eachField}>
          <b>Title:</b>
          <Field
            className={css.field}
            name="eachTitle"
            component="select"
            placeholder="Title"
          >
            <option>Select One</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </Field>
        </div>
        <div style={{ width: "70%" }} className={css.eachField}>
          <b>Contact Name:</b>
          <Field
            className={css.field}
            name="eachName"
            component="input"
            type="text"
            placeholder=" Name"
          />
        </div>
      </div>

      <div className={css.row}>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Contact Number:</b>
          <Field
            className={css.field}
            name="eachNumber"
            component="input"
            type="text"
            placeholder=" Number"
          />
        </div>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Contact Email:</b>
          <Field
            className={css.field}
            name="eachEmail"
            component="input"
            type="text"
            placeholder="Email"
          />
        </div>
      </div>

      <div className={css.row}>
        <div className={css.eachField}>
          <b>Designation:</b>
          <Field
            className={css.field}
            name="eachDesignation"
            component="input"
            type="text"
            placeholder="Designation"
          />
        </div>
      </div>

      <p
        className={css.addButton}
        onClick={() => {
          if (!props.values.eachTitle && !props.values.eachName) {
            return;
          }
          let arr = [];
          if (
            props.values?.contactDetails &&
            props.values.contactDetails?.length > 0
          ) {
            arr = [...props.values?.contactDetails];
          }
          props.form.batch(() => {
            props.form.change("contactDetails", [
              ...arr,
              {
                title: props.values.eachTitle || "",
                name: props.values.eachName || "",
                number: props.values.eachNumber || "",
                email: props.values.eachEmail || "",
                designation: props.values.eachDesignation || "",
              },
            ]);
            props.form.change("eachTitle", "");
            props.form.change("eachName", "");
            props.form.change("eachNumber", "");
            props.form.change("eachEmail", "");
            props.form.change("eachDesignation", "");
          });
        }}
      >
        + {"  "}
        Add New
      </p>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {props.values?.contactDetails?.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.title + " " + value.name}</td>
                <td>{value.number}</td>
                <td>{value.email}</td>
                <td>{value.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={css.buttonsContainer}>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            props.form.batch(() => {
              props.form.change("contactDetails", []);
              props.form.change("eachTitle", "");
              props.form.change("eachName", "");
              props.form.change("eachNumber", "");
              props.form.change("eachEmail", "");
              props.form.change("eachDesignation", "");
            });
          }}
        >
          Clear
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            props.form.batch(() => {
              props.form.change("eachTitle", "");
              props.form.change("eachName", "");
              props.form.change("eachNumber", "");
              props.form.change("eachEmail", "");
              props.form.change("eachDesignation", "");
            });

            props.handleSubmit();
          }}
        >
          {props.nextLabel}
        </button>
      </div>
    </form>
  );
}
