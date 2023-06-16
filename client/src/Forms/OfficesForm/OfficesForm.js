import React from "react";
import { Form, Field } from "react-final-form";

import css from "./OfficesForm.module.css";
const required = (value) => (value ? undefined : "Required");

export default function OfficesForm(props) {
  return (
    <form className={css.form} onSubmit={props.handleSubmit}>
      <div className={css.row}>
        <div className={css.eachField}>
          <b>Address type:</b>
          <Field
            className={css.field}
            name="eachAddressType"
            component="select"
          >
            <option>Select One</option>
            <option value="home">Home</option>
            <option value="office">Office</option>
          </Field>
        </div>
      </div>

      <div className={css.row}>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b> Address:</b>
          <Field
            className={css.field}
            name="eachOfficeAddress"
            component="input"
            type="text"
            placeholder=" Address"
          />
        </div>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b> Pin:</b>
          <Field
            className={css.field}
            name="eachOfficePin"
            component="input"
            type="text"
            placeholder="Pin Code"
          />
        </div>
      </div>
      <div className={css.row}>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b> Number:</b>
          <Field
            className={css.field}
            name="eachOfficeNumber"
            component="input"
            type="text"
            placeholder=" Number"
          />
        </div>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b> Email:</b>
          <Field
            className={css.field}
            name="eachOfficeEmail"
            component="input"
            type="text"
            placeholder="Email"
          />
        </div>
      </div>

      <p
        className={css.addButton}
        onClick={() => {
          if (
            !props.values.eachAddressType &&
            !props.values.eachOfficeAddress
          ) {
            return;
          }
          let arr = [];
          if (props.values?.offices && props.values.offices?.length > 0) {
            arr = [...props.values?.offices];
          }
          props.form.change("offices", [
            ...arr,
            {
              addressType: props.values.eachAddressType || "",
              address: props.values.eachOfficeAddress || "",
              number: props.values.eachOfficeNumber || "",
              email: props.values.eachOfficeEmail || "",
              pin: props.values.eachOfficePin || "",
            },
          ]);
          props.form.change("eachOfficeAddress", "");
          props.form.change("eachOfficeNumber", "");
          props.form.change("eachOfficeEmail", "");
          props.form.change("eachOfficePin", "");
          props.form.change("eachAddressType", "");
        }}
      >
        + {"  "}
        Add New
      </p>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Address type</th>
            <th>Registered Address </th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {props.values?.offices?.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.addressType}</td>
                <td>{(value.address || "") + " " + value.pin || ""}</td>
                <td>{value.email}</td>
                <td>{value.number}</td>
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
            props.form.change("offices", []);
            props.form.change("eachOfficeAddress", "");
            props.form.change("eachOfficeNumber", "");
            props.form.change("eachOfficeEmail", "");
            props.form.change("eachOfficePin", "");
            props.form.change("eachAddressType", "");
          }}
        >
          Clear
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            props.form.batch(() => {
              props.form.change("eachOfficeAddress", "");
              props.form.change("eachOfficeNumber", "");
              props.form.change("eachOfficeEmail", "");
              props.form.change("eachOfficePin", "");
              props.form.change("eachAddressType", "");
            });

            if (props.company) {
              props.handleSubmit();
              return;
            }
            props.handleCreate(props.values);
          }}
        >
          {props.nextLabel}
        </button>
      </div>
    </form>
  );
}
