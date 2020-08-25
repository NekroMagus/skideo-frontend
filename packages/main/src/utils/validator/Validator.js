import formLocalize from "../../store/localize/form";

export const requiredField = (value) => {
  if (!value) {
    return formLocalize.isRequired;
  }
};

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength) {
    return `${formLocalize.minLength}${minLength}`
  }
};