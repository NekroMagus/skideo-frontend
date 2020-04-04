import * as axios from 'axios';


const getInstance = () => {
    // noinspection JSUnresolvedFunction
    return axios.create({
        baseURL: 'http://194.31.52.136:8080/',
        headers: {
            "Authorization" : localStorage.getItem("token")
        }
    });
};

export const authAPI = {
    login(login, password) {
        return getInstance().post('login', {login, password});
    },
    register(login, password) {
        return getInstance().post('registration', {login, password});
    }
};


export const profileAPI = {
    getProfile() {
        return getInstance().get('profile');
    },
    editProfile(user) {
        return getInstance().put('profile/edit', {user})
    }
};