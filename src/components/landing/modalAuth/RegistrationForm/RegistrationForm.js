import FormControl from "../../../common/form-control/formControl";
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import {Field, reduxForm} from "redux-form";
import css from "../ModalAuth.module.css";
import React from "react";
import handleSubmit from "redux-form/lib/handleSubmit";

const Input = FormControl('input');
const minLength = minLengthCreator(6);

const RegistrationForm = (props) => {
    return (
          <div className="modal-content">
            <div className="text-center">
              <h2>Регистрация</h2>
              <div className="push20"></div>
            </div>
            <form onSubmit={props.handleSubmit}>
              <div className="input">
                <div className="blockinput">
                  <h4>Логин<span className="red f16">*</span></h4>
                  {props.error && <div className={css.error}>{props.error}</div>}
                  <Field
                      className={css.tab}
                      name={"login"}
                      component={Input}
                      placeholder={"Ваш логин"}
                      autoComplete={"off"}
                      validate={[requiredField, minLength]}/>
                </div>
                <div className="push20"></div>
                <div className="blockinput">
                  <h4>Пароль<span className="red f16">*</span></h4>
                  <Field className={css.tab}
                         name={"password"}
                         component={Input}
                         placeholder={"Ваш пароль"}
                         type={"password"}
                         validate={[requiredField, minLength]}/>
                </div>
              </div>
              <small><span className="red f16">*</span>
                - поля, обязательные для заполнения</small>
              <div className="push20"></div>
              <button className="btn btn-send">Зарегистрироваться</button>

              <div className="conditions">
                <a href="#">Правила</a> и <a href="#">Конфиденциальность</a>
              </div>
            </form>
          </div>
    );
};

export default reduxForm({form: "registration"})(RegistrationForm);

