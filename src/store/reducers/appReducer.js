import {authenticate} from "./authReducer";

const SET_INITIALIZE = "SET_INITIALIZE";

const initialState = {
    isInit: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return {
                ...state,
                isInit: true
            };
        default:
            return state;
    }
};

export const initialize = () => ({type: SET_INITIALIZE});

export const initializeApp = () => (dispatch) => {
    const token = localStorage.getItem("token");
    if (token && token.startsWith("Bearer ")) {
        dispatch(initialize());
        dispatch(authenticate());
    }
    dispatch(initialize());
};

export default appReducer;