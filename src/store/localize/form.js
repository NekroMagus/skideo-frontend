import LocalizedStrings from 'react-localization';

const formLocalize = new LocalizedStrings({
  en: {
    auth: "Sign In",
    registration: "Sign Up",
    login: "Login",
    password: "Password",
    enterLogin: "Enter login*",
    enterPassword: "Enter password*",
    requiredFields: "Required fields",
    rulesAndPrivacy: "Rules and Privacy",
    isRequired: "Field is required",
    minLength: "Minimum count symbols is ",
    loginError: "Wrong login or password",
    loginExists: "User with this login already exists"
  },
  ru: {
    auth: "Вход",
    registration: "Регистрация",
    login: "Логин",
    password: "Пароль",
    enterLogin: "Введите логин*",
    enterPassword: "Введите пароль*",
    requiredFields: "поля, обязательные для заполнения",
    rulesAndPrivacy: "Правила и Конфиденциальность",
    isRequired: "Поле обязательно",
    minLength: "Минимальное количество символов ",
    loginError: "Логин или пароль неверны",
    loginExists: "Пользователь с таким логином уже существует"
  }
});

export default formLocalize;