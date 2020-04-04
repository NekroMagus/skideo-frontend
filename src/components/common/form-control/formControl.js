import React from 'react';
import css from './FormControl.module.css';

const FormControl = (Element) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={`${hasError ? css.error : ""}`}>
            <Element {...input} {...props}/>
            {hasError && <div>{meta.error}</div>}
        </div>
    );
};

export default FormControl;