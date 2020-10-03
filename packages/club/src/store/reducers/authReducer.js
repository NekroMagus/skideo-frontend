import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {getProfileData, removeProfile} from "./profileReducer";
import formLocalize from "../localize/form";

const AUTH = "AUTH";
const SUBMIT_FORM_IN_PROGRESS = "SUBMIT_FORM_IN_PROGRESS";
const LOGOUT = "LOGOUT";

const initialState = {
  isAuth: false,
  isFormSubmit: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isAuth: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      };
    default:
      return state;
  }
};

export const authenticate = () => ({type: AUTH});
export const toggleFormSubmit = () => ({type: SUBMIT_FORM_IN_PROGRESS});
const logoutState = () => ({type: LOGOUT});

export const login = (login, password) => (dispatch) => {
  localStorage.removeItem("token");
  return authAPI.login(login, password)
      .then(res => {
        localStorage.setItem("token", res.data.jwtToken);
        dispatch(authenticate());
        dispatch(getProfileData());
        return true;
      })
      .catch(error => {
        if (error.response && (error.response.status === 404 || error.response.status === 401)) {
          dispatch(stopSubmit("login", {_error: formLocalize.loginError}))
        }
      });
};

export const registration = (login, password) => (dispatch) => {
  localStorage.removeItem("token");
  return authAPI.register(login, password)
      .then(res => {
        localStorage.setItem("token", res.data.jwtToken);
        dispatch(authenticate());
        return true;
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          dispatch(stopSubmit("registration", {_error: formLocalize.loginExists}))
        }
      })
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutState());
  dispatch(removeProfile());
};

export default authReducer;