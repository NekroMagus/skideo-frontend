import axios from 'axios';
import {AuthDto, RegistrationDto} from "./dtos";

const getInstance = () => {
  return axios.create({
    baseURL: 'https://skideo.net:8443',
    headers: {
      "Authorization": localStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  });
};

export const playerAuthApi = {
  login(data: AuthDto) {
    return getInstance().post('/login', data);
  },
  register(data: RegistrationDto) {
    return getInstance().post('/registration', data);
  }
};