import LocalizedStrings from 'react-localization';

const formLocalize = new LocalizedStrings({
  en: {
    whoAreYou: "Who are you",
    academy: "Academy",
    club:"Club",
    player: "Player",
    scout: "Scout",
    auth: "Sign In",
    enterAccount:"Enter your account",
    registration: "Sign Up",
    registrationSocialMedia: "Sign up with",
    submitRegistration: "Submit",
    createRegistration: "Create new account",
    login: "Login",
    signIn:"Login",
    password: "Password",
    enterLogin: "Enter login*",
    enterPassword: "Enter password*",
    submitPassword: "Submit password",
    enterSubmitPassword: "Enter submit password*",
    passwordNotMatch: "Password does not match",
    requiredFields: "Required fields",
    rulesAndPrivacy: "Rules and Privacy",
    isRequired: "*Field is required",
    minLength: "Minimum count symbols is ",
    loginError: "Wrong login or password",
    loginExists: "User with this login already exists",
    professional: "Professional",
    hasAgent: "I have an agent",
    amateur: "Amateur",
  },
  ru: {
    whoAreYou: "Кто вы",
    academy: "Академия",
    club:"Клуб",
    player: "Футболист",
    scout: "Скаут",
    auth: "Вход",
    registration: "Регистрация",
    registrationSocialMedia: "Или войдите через соцсети",
    submitRegistration: "Зарегистрироваться",
    createRegistration: "Создать личный кабинет",
    enterAccount:"Войти в личный кабинет",
    login: "Логин",
    password: "Пароль",
    enterLogin: "Введите логин*",
    enterPassword: "Введите пароль*",
    submitPassword: "Подтверждение пароля",
    enterSubmitPassword: "Подтвердите пароль*",
    passwordNotMatch: "Пароли не совпадают",
    requiredFields: "поля, обязательные для заполнения",
    rulesAndPrivacy: "Правила и Конфиденциальность",
    isRequired: "*Поле обязательно",
    minLength: "Минимальное количество символов: ",
    loginError: "Логин или пароль неверны",
    loginExists: "Пользователь с таким логином уже существует",
    professional: "Профессионал",
    hasAgent: "У меня есть агент",
    amateur: "Любитель",
  }
});

export default formLocalize;