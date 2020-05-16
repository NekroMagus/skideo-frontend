import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../form-control/formControl";
import {requiredField} from "../../../utils/validator/Validator";


const Input = FormControl('input');

const VideoForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field
            component={Input}
            type="text"
            name={"video"}
            placeholder="Видео на youtube"
            validate={[requiredField]}
        />
        <div className="push20"></div>
        <button className="btn">Добавить</button>
      </form>
  );
};

export default reduxForm({form: "addVideo"})(VideoForm);