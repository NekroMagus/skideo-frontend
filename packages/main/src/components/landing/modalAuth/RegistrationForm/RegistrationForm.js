import FormControl from "../../../common/form-control/formControl";
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import {Field, reduxForm} from "redux-form";
import css from "../ModalAuth.module.css";
import React from "react";
import handleSubmit from "redux-form/lib/handleSubmit";
import formLocalize from "../../../../store/localize/form";

const Input = FormControl('input');
const minLength = minLengthCreator(6);

const RegistrationForm = (props) => {
    return (
          <div className="modal-content">
            <div className="text-center">
              <h2>{formLocalize.registration}</h2>
              <div className="push20"></div>
            </div>
            <form onSubmit={props.handleSubmit}>
              <div className="input">
                <div className="blockinput">
                  <h4>{formLocalize.login}<span className="red f16">*</span></h4>
                  {props.error && <div className={css.error}>{props.error}</div>}
                  <Field
                      className={css.tab}
                      name={"login"}
                      component={Input}
                      placeholder={formLocalize.enterLogin}
                      autoComplete={"off"}
                      validate={[requiredField, minLength]}/>
                </div>
                <div className="push20"></div>
                <div className="blockinput">
                  <h4>{formLocalize.password}<span className="red f16">*</span></h4>
                  <Field className={css.tab}
                         name={"password"}
                         component={Input}
                         placeholder={formLocalize.enterPassword}
                         type={"password"}
                         validate={[requiredField, minLength]}/>
                </div>
              </div>
              <small><span className="red f16">*</span> - {formLocalize.requiredFields}</small>
              <div className="push20"></div>
              <button className="btn btn-send">{formLocalize.registration}</button>

              <div className="conditions">
                <a href="#">{formLocalize.rulesAndPrivacy}</a>
              </div>
            </form>
          </div>
    );
};

export default reduxForm({form: "registration"})(RegistrationForm);

