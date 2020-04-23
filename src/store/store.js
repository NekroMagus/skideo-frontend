import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import {reducer as formReducer} from 'redux-form';
import thunk from "redux-thunk";
import appReducer from "./reducers/appReducer";
import profileReducer from "./reducers/profileReducer";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    profile: profileReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;