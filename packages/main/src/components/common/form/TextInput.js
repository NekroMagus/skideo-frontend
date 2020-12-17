import React from 'react';
import {useField} from "formik";
import css from "../../landing/modalAuth/ModalAuth.module.css";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
      <>
        <div className="blockinput">
          <label htmlFor={props.id || props.name}>{label}</label>
          {/* className={css.tab} */}
          <input className={css.tab} {...field} {...props} />
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}
        </div>
        <div className="push20"></div>
      </>
  );
};

export default TextInput;