import LocalizedStrings from 'react-localization';

const profileLocalize = new LocalizedStrings({
  en: {
    firstName: "Name",
    lastName: "Surname",
    city: "City",
    editProfile: "Edit profile",
    position: "Position",
    email: "E-mail",
    phoneNumber: "Phone number",
    country: "Country",
    socialNetwork: "Social network",
    backToProfile: "Back to profile",
    myVideos: "My videos",
    birthday: "Birth date",
    general: "General",
    save:"Save",
    add: "Add",
    linkToYoutube:"Link to youtube video",
    didntAdd: "You did't add videos"
  },
  ru: {
    firstName: "Имя",
    lastName: "Фамилия",
    city: "Город",
    editProfile: "Редактировать профиль",
    position: "Амплуа",
    email: "E-mail",
    phoneNumber: "Номер телефона",
    country: "Страна",
    socialNetwork: "Вы в соц сети",
    backToProfile: "Назад в профиль",
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