import React from 'react';
import {useField} from "formik";
import css from "../../landing/modalAuth/ModalAuth.module.css";

const TextInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  return (
      <>
        <div className="textInput">
          <label htmlFor={props.id || props.name}>{label}</label>
          {/* className={css.tab} */}
          <input  {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
        </div>
      </>
  );
};

export default TextInput;