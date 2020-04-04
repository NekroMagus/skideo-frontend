import FormControl from "../../../common/form-control/formControl";
import {minLengthCreator, requiredField} from "../../../../utils/validator/Validator";
import {Field, reduxForm} from "redux-form";
import css from "../ModalAuth.module.css";
import React from "react";

const Input = FormControl('input');
const minLength = minLengthCreator(6);

const AuthForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        {props.error && <div className={css.error}>{props.error}</div>}
        <Field
            className={css.tab}
            name={"login"}
            component={Input}
            placeholder={"login"}
            autoComplete={"off"}
            validate={[requiredField, minLength]}/>
        <Field className={css.tab}
               name={"password"}
               component={Input}
               placeholder={"password"}
               type={"password"}
               validate={[requiredField, minLength]}/>
        <div className={css.center}>
          <button className={css.button}>Авторизоваться</button>
        </div>
      </form>
  );
};

export default reduxForm({form: "login"})(AuthForm);

