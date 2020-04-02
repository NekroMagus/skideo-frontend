import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const AUTH = "AUTH";
const SUBMIT_FORM_IN_PROGRESS = "SUBMIT_FORM_IN_PROGRESS";

const initialState = {
    isAuth: false,
    isFormSubmit: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                isAuth: true
            };
        default:
            return state;
    }
};

const authenticate = () => ({type: AUTH});
export const toggleFormSubmit = () => ({type: SUBMIT_FORM_IN_PROGRESS});

export const login = (login, password) => (dispatch) => {
    authAPI.login(login, password)
        .then(res => {
            console.log(res.data.jwtToken);
            localStorage.setItem("token", res.data.jwtToken)
        })
        .catch(error => {
            if (error.response.status === 404) {
                dispatch(stopSubmit("login", {_error: "Логин или пароль неверны"}))
            }
        });
};

export const registration = (login, password) => (dispatch) => {
    authAPI.register(login, password)
        .then(res => {
            localStorage.setItem("token",res.data.jwtToken);
            dispatch(authenticate);
        })
        .catch(error => {
            if (error.response.status === 422) {
                dispatch(stopSubmit("registration", {_error: "Пользователь с таким логином уже существует"}))
            }
        })
};

export default authReducer;