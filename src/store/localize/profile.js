import LocalizedStrings from 'react-localization';

const profileLocalize = new LocalizedStrings({
  en: {
    firstName: "Name",
    lastName: "Surname",
    city: "city",
    editProfile: "edit profile",
    position: "position",
    email: "e-mail",
    phoneNumber: "phone number",
    country: "country",
    socialNetwork: "social network",
    backToProfile: "back to profile",
    myVideos: "my videos",
    birthday: "birthday",
    general: "General",
    save:"save",
    add: "add",
    linkToYoutube:"link to youtube video",
    didntAdd: "You did't add videos"
  },
  ru: {
    firstName: "Имя",
    lastName: "Фамилия",
    city: "город",
    editProfile: "редактировать профиль",
    position: "амплуа",
    email: "e-mail",
    phoneNumber: "номер телефона",
    country: "страна",
    socialNetwork: "Вы в соц сети",
    backToProfile: "назад в профиль",
    myVideos: "Мои видео",
    birthday: "Дата рождения",
    general: "Основное",
    save: "Сохранить",
    add: "Добавить",
    linkToYoutube:"Ссылка на видео youtube",
    didntAdd: "Вы еще не добавили видео"
  }
});

export default profileLocalize;