import React from "react";

import {Form, Formik} from "formik";
import formLocalize from '../../../../store/localize/form';
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import TextInput from "../../../common/form/TextInput";

const RegistrationForm = (props) => {

  const minLength = minLengthCreator(6);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  return (
      <div>
        <h2>{formLocalize.registration}</h2>
        <Formik
            initialValues={{
              login: "",
              password: "",
              submitPassword: ""
            }}
            onSubmit={handleSubmit}
        >
          {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <TextInput
                    label={formLocalize.login}
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
                    name="submitPassword"
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

export default RegistrationForm;