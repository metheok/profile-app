import React from "react";
import { Form, Field } from "react-final-form";
import { Tabs } from "antd";
import css from "./CompanyDetails.module.css";
import AboutForm from "../Forms/AboutForm/AboutForm";
import ContactDetailsForm from "../Forms/ContactDetailsForm/ContactDetailsForm";
import LegalInfoForm from "../Forms/LegalInfoForm/LegalInfoForm";
import OfficesForm from "../Forms/OfficesForm/OfficesForm";

export default function CompanyDetails({
  logOut,
  user,
  company,
  createCompany,
  updateCompany,
}) {
  const [activeKey, setActiveKey] = React.useState(1);
  const onChange = (key) => {
    setActiveKey(key);
  };
  const onSubmit = async (data) => {
    if (company) {
      await updateCompany(data);
    } else {
      if (activeKey < 4) {
        setActiveKey(activeKey + 1);
      }
    }
  };
  const handleCreate = async (data) => {
    await createCompany(data);
  };
  return (
    <div className={css.root}>
      <Form
        onSubmit={onSubmit}
        initialValues={company}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          invalid,
          values,
        }) => (
          <Tabs
            defaultActiveKey={1}
            activeKey={activeKey}
            items={[
              {
                key: 1,
                label: `About`,
                children: (
                  <AboutForm
                    handleSubmit={handleSubmit}
                    values={values}
                    form={form}
                    company={company}
                    user={user}
                    nextLabel={company ? "Save " : "Save and Next"}
                  />
                ),
              },
              {
                key: 2,
                label: `Contact Details`,
                children: (
                  <ContactDetailsForm
                    handleSubmit={handleSubmit}
                    form={form}
                    values={values}
                    company={company}
                    user={user}
                    nextLabel={company ? "Save " : "Save and Next"}
                  />
                ),
              },
              {
                key: 3,
                label: `Legal Information`,
                children: (
                  <LegalInfoForm
                    handleSubmit={handleSubmit}
                    form={form}
                    values={values}
                    company={company}
                    user={user}
                    nextLabel={company ? "Save " : "Save and Next"}
                  />
                ),
              },
              {
                key: 4,
                label: `Offices`,
                children: (
                  <OfficesForm
                    handleSubmit={handleSubmit}
                    handleCreate={handleCreate}
                    values={values}
                    form={form}
                    company={company}
                    user={user}
                    nextLabel={company ? "Save " : "Submit and Save"}
                  />
                ),
              },
            ]}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
}
