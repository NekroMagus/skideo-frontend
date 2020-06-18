import LocalizedStrings from 'react-localization';

const formLocalize = new LocalizedStrings({
  en: {
    auth: "Sign In",
    registration: "Sign Up",
    login: "Login",
    password: "Password",
    enterLogin: "Enter login*",
    enterPassword: "Enter password*",
    requiredFields: "required fields",
    rulesAndPrivacy: "Rules and Privacy",
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
  }
});

export default formLocalize;