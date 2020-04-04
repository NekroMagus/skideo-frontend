export const requiredField = (value) => {
  if (!value) {
    return "Поле не может быть пустым";
  }
};

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength) {
    return `Минимальное количество символов ${minLength}`
  }
};