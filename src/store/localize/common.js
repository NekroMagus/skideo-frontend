import LocalizedStrings from 'react-localization';

const commonLocalize = new LocalizedStrings({
  en: {
    authButton: "Sign in/Sign up",
    main: 'Main',
    achievements: "Achievements",
    partners: "Our partners",
    registration: "Registration",
    logout: "Logout"
  },
  ru: {
    authButton: "Вход/Регистрация",
    main: 'Главная',
    achievements: "Достижения",
    partners: "Наши партнеры",
    registration: "Регистрация",
    logout: "Выход"
  }
});

export default commonLocalize;