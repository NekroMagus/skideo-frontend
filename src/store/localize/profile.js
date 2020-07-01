import LocalizedStrings from 'react-localization';

const profileLocalize = new LocalizedStrings({
  en: {
    firstName: "Name",
    lastName: "Surname",
    city: "city"
  },
  ru: {
    firstName: "Имя",
    lastName: "Фамилия",
    city: "город"
  }
});

export default profileLocalize;