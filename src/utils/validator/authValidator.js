import React from "react";
import formLocalize from "../../store/localize/form";

const authValidator = (values) => {
  const errors = {};

  if (!values.login) {
    errors.login = formLocalize.isRequired;
  } else if (values.login.length < 6) {
    errors.login = formLocalize.minLength + "6";
  }

  // пользователя с таким логином не существует

  if (!values.password) {
    errors.password = formLocalize.isRequired;
  } else if (values.password.length < 6) {
    errors.password = formLocalize.minLength + "6";
  }
  // неправильный пароль

  return errors;
};

export default authValidator;