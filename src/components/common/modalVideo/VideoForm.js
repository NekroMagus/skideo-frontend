import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../form-control/formControl";
import {requiredField} from "../../../utils/validator/Validator";
import profileLocalize from "../../../store/localize/profile";


const Input = FormControl('input');

const VideoForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field
            component={Input}
            type="text"
            name={"video"}
            placeholder={profileLocalize.linkToYoutube}
            validate={[requiredField]}
        />
        <div className="push20"></div>
        <button className="btn">{profileLocalize.add}</button>
      </form>
  );
};

export default reduxForm({form: "addVideo"})(VideoForm);