import React from "react";
import {Form, Formik} from "formik";
import formLocalize from '../../../../store/localize/form';
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import TextInput from "../../../common/form/TextInput";
import AccountSelectButton from "./AccountSelectButton";

const RegistrationForm = (props) => {

  const minLength = minLengthCreator(6);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  return (
      <div>
          <h3 className="regHeader">{formLocalize.createRegistration}</h3>
          <AccountSelectButton />
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
                />
                <TextInput
                    label={formLocalize.password}
                    name="password"
                />
                <TextInput
                    label={formLocalize.submitPassword}
                    name="submitPassword"
                />
                <div className="alignCenter">
                    <label className="textInput">{formLocalize.registrationSocialMedia}</label>
                <button className="signButton" type="submit">{formLocalize.submitRegistration}</button>
                </div>
              </Form>
          )}
        </Formik>
        <div className="conditions">
          <a href="#" className="textInput">{formLocalize.rulesAndPrivacy}</a>
        </div>
      </div>
  );
}

export default RegistrationForm;