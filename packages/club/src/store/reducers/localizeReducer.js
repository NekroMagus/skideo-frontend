import landingLocalize from "../localize/landing";
import commonLocalize from "../localize/common";
import formLocalize from "../localize/form";
import profileLocalize from "../localize/profile";

const RU_LOCAL = "ru";
const ENG_LOCAL = 'eng';

let localize = localStorage.getItem('language');

if (!localize) {
  localize = RU_LOCAL;
  localStorage.setItem('language', 'ru');
}

landingLocalize.setLanguage(localize);
commonLocalize.setLanguage(localize);
formLocalize.setLanguage(localize);
profileLocalize.setLanguage(localize);

const initState = {
  language: localize
};

const localizeReducer = (state = initState, action) => {
  switch (action.type) {
    case RU_LOCAL:
      localStorage.setItem('language', RU_LOCAL);
      landingLocalize.setLanguage(RU_LOCAL);
      formLocalize.setLanguage(RU_LOCAL);
      commonLocalize.setLanguage(RU_LOCAL);
      profileLocalize.setLanguage(RU_LOCAL);
      return {
        language: RU_LOCAL
      };
    case ENG_LOCAL:
      localStorage.setItem('language', ENG_LOCAL);
      landingLocalize.setLanguage(ENG_LOCAL);
      commonLocalize.setLanguage(ENG_LOCAL);
      formLocalize.setLanguage(ENG_LOCAL);
      profileLocalize.setLanguage(ENG_LOCAL);
      return {
        language: ENG_LOCAL
      };
    default:
      return initState;
  }
};

const setEngLang = () => ({type: ENG_LOCAL});
const setRuLang = () => ({type: RU_LOCAL});

export const toggleLang = (lang) => (dispatch) => {
  if (lang === RU_LOCAL) {
    dispatch(setEngLang());
  } else if (lang === ENG_LOCAL) {
    dispatch(setRuLang());
  }
};

export default localizeReducer;