import React from "react";
import formLocalize from "../../store/localize/form";

  const registrationValidator = (values) => {
    const errors = {};
    if (!values.login) {
      errors.login = formLocalize.isRequired;
    } else if (values.login.length < 6) {
      errors.login = formLocalize.minLength + "6";
    }

    // если пользователь с таким логином уже существует

    if (!values.password) {
      errors.password = formLocalize.isRequired;
    } else if (values.password.length < 6) {
      errors.password = formLocalize.minLength + "6";
    }

    if (!values.submitPassword) {
      errors.submitPassword = formLocalize.isRequired;
    } else if (values.password !== values.submitPassword) {
      errors.submitPassword = formLocalize.passwordNotMatch;
    }

    return errors;
  };

export default registrationValidator;
