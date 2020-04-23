import FormControl from "../../../common/form-control/formControl";
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import {Field, reduxForm} from "redux-form";
import css from "../ModalAuth.module.css";
import React from "react";

const Input = FormControl('input');
const minLength = minLengthCreator(6);

const AuthForm = (props) => {
  return (
        <div className="modal-content">
          <div className="text-center">
            <h2>Вход</h2>
            <div className="push20"></div>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className="input">
              <div className="blockinput">
                <h4>Логин</h4>
                {props.error && <div className={css.error}>{props.error}</div>}
                <Field
                    className="email"
                    name={"login"}
                    component={Input}
                    placeholder={"Введите логин*"}
                    autoComplete={"off"}
                    validate={[requiredField, minLength]}/>
              </div>
              <div className="push20"></div>
              <div className="blockinput">
                <h4>Пароль</h4>
                <Field className=""
                       name={"password"}
                       component={Input}
                       placeholder={"Введите пароль*"}
                       type={"password"}
                       validate={[requiredField, minLength]}/>
              </div>
            </div>
            <div className="push20"></div>
            <button className="btn btn-send">Войти</button>
            {/*<div className="conditions">*/}
            {/*  <a href="recovery.html">Напомнить пароль</a>*/}
            {/*</div>*/}
          </form>
        </div>

  );
};

export default reduxForm({form: "login"})(AuthForm);

