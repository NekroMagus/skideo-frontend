import LocalizedStrings from 'react-localization';

const commonLocalize = new LocalizedStrings( {
  en:{
    authButton: "Sign in/Sign up",
    main: 'Main',
    achievements: "Achievements",
    partners: "Our partners",
    registration: "Registration",
    exit: "Exit"
  },
  ru: {
    authButton: "Вход/Регистрация",
    main: 'Главная',
    achievements: "Достижения",
    partners: "Наши партнеры",
    registration: "Регистрация",
    exit: "Выход"
  }
});

export default commonLocalize;