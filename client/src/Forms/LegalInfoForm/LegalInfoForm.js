import React from "react";
import css from "./LegalInfoForm.module.css";
import { Form, Field } from "react-final-form";
const required = (value) => (value ? undefined : "Required");

export default function LegalInfoForm(props) {
  return (
    <form className={css.form} onSubmit={props.handleSubmit}>
      <div className={css.row}>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Company type:</b>
          <Field className={css.field} name="companyType" component="select">
            <option>Select One</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
          </Field>
        </div>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Registration number:</b>
          <Field
            className={css.field}
            name="companyRegistrationNumber"
            component="input"
            type="text"
            placeholder=" Reg. no."
          />
        </div>
      </div>

      <div className={css.row}>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Year of Registration:</b>
          <Field
            className={css.field}
            name="companyYearOfRegistration"
            component="input"
            type="number"
            placeholder="Year"
          />
        </div>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>GST:</b>
          <Field
            className={css.field}
            name="companyGst"
            component="input"
            type="text"
            placeholder="GST number"
          />
        </div>
      </div>

      <div className={css.row}>
        <div className={css.eachField}>
          <b>Last year turnover:</b>
          <Field
            className={css.field}
            name="companyLastYearTurnover"
            component="input"
            type="text"
            placeholder="In figures"
          />
        </div>
      </div>

      <div className={css.registeredAddressContainer}>
        <h5>Registered Address</h5>
      </div>

      <div className={css.row}>
        <div className={css.eachField}>
          <b>Address:</b>
          <Field
            className={css.field}
            name="registeredAddressLine"
            component="input"
            type="text"
            placeholder="Address"
          />
        </div>
      </div>
      <div className={css.row}>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Country:</b>
          <Field
            className={css.field}
            name="registeredAddressCountry"
            component="input"
            type="text"
            placeholder="Country "
          />
        </div>
        <div style={{ width: "48%" }} className={css.eachField}>
          <b>Pin Code:</b>
          <Field
            className={css.field}
            name="registeredAddressPin"
            component="input"
            type="number"
            placeholder="PIN "
          />
        </div>
        <div className={css.buttonsContainer}>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.form.batch(() => {
                props.form.change("companyType", "");
                props.form.change("companyRegistrationNumber", "");
                props.form.change("companyYearOfRegistration", "");
                props.form.change("companyGst", "");
                props.form.change("companyLastYearTurnover", "");
                props.form.change("registeredAddressLine", "");
                props.form.change("registeredAddressCountry", "");
                props.form.change("registeredAddressPin", "");
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
