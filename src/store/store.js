import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import {reducer as formReducer} from 'redux-form';
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;