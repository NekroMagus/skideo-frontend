import React from "react";
import css from "../ModalAuth.module.css";
import formLocalize from "./form";
import { minLengthCreator, requiredField } from "./validator";
import { Formik, FormikProps, Form, Field, useField, useFormik } from "formik";

const minLength = minLengthCreator(6);

class Registration extends React.Component {
  render() {
    const TextInput = ({ label, ...props }) => {
      // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
      // which we can spread on <input>. We can use field meta to show an error
      // message if the field is invalid and it has been touched (i.e. visited)
      const [field, meta] = useField(props);
      return (
        <>
          <div className="blockinput">
              <label htmlFor={props.id || props.name}>{label}</label>
              {/* className={css.tab} */}
              <input className={css.tab} {...field} {...props} />
              {meta.touched && meta.error ? (
               <div className="error">{meta.error}</div>
              ) : null}
          </div>
        <div className="push20"></div>
        </>
      );
    };

    return (
      <div>
        <h2>{formLocalize.registration}</h2>
        <Formik
          initialValues={{
            name: "",
            placeholder: "",
            autoComplete: "off"
          }}
          validate={[requiredField, minLength]}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <TextInput
                label="Логин"
                name="login"
                placeholder={formLocalize.enterLogin}
              />
              <TextInput
                label={formLocalize.password}
                name="password"
                placeholder={formLocalize.enterPassword}
              />
              <TextInput
                label={formLocalize.submitPassword}
                name="SubmitPassword"
                placeholder={formLocalize.enterSubmitPassword}
              />
              <small>
              <span className="red f16">*</span> - {formLocalize.requiredFields}
              </small>
              <button type="submit">{formLocalize.registration}</button>
            </Form>
          )}
        </Formik>
          <div className="push20"></div>
          <div className="conditions">
            <a href="#">{formLocalize.rulesAndPrivacy}</a>
          </div>
      </div>
    );
  }
}