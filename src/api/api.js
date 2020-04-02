import * as axios from 'axios';


// noinspection JSUnresolvedFunction
const instance = axios.create({
    baseURL: 'http://194.31.52.136:8080/',
    headers: {
        "Authorization" : localStorage.getItem("token")
    }
});

export const authAPI = {
    login(login, password) {
        return instance.post('login', {login, password});
    },
    register(login, password) {
        return instance.post('registration', {login, password});
    }
};