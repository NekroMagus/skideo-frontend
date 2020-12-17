import FormControl from "../../../common/form-control/formControl";
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import {Field, reduxForm} from "redux-form";
import css from "../ModalAuth.module.css";
import React from "react";
import formLocalize from "../../../../store/localize/form";

const Input = FormControl('input');
const minLength = minLengthCreator(6);

const AuthForm = (props) => {
  return (
        <div className="modal-content">
          <div className="text-center">
            <h2>{formLocalize.auth}</h2>
            <div className="push20"></div>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className="input">
              <div className="blockinput">
                <h4>{formLocalize.login}</h4>
                {props.error && <div className={css.error}>{props.error}</div>}
                <Field
                    className="email"
                    name={"login"}
                    component={Input}
                    placeholder={formLocalize.enterLogin}
                    autoComplete={"off"}
                    validate={[requiredField, minLength]}/>
              </div>
              <div className="push20"></div>
              <div className="blockinput">
                <h4>{formLocalize.password}</h4>
                <Field className=""
                       name={"password"}
                       component={Input}
                       placeholder={formLocalize.enterPassword}
                       type={"password"}
                       validate={[requiredField, minLength]}/>
              </div>
            </div>
            <div className="push20"></div>
            <button className="btn btn-send">{formLocalize.auth}</button>
            {/*<div className="conditions">*/}
            {/*  <a href="recovery.html">Напомнить пароль</a>*/}
            {/*</div>*/}
          </form>
        </div>

  );
};

export default reduxForm({form: "login"})(AuthForm);

