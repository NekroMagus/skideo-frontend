import {profileAPI} from "../../api/api";
import {logout} from "./authReducer";
import {stopSubmit} from "redux-form";

const SET_PROFILE = "SET_PROFILE";
const SET_VIDEO = "SET_VIDEO";

const initialState = {
  name: null,
  surname: null,
  roleFootball: null,
  login: null,
  email: null,
  telephoneNumber: null,
  dateOfBirth: null,
  country: null,
  city: null,
  socialNetwork: null,
  video: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        ...action.payload
      }
    }
    case SET_VIDEO: {
      return {
        ...state,
        video: action.video
      }
    }
    default:
      return state;
  }
};

const setProfile = (payload) => ({type: SET_PROFILE, payload});
const setVideo = (video) =>({type: SET_VIDEO, video});

export const getProfileData = () => (dispatch) => {
  profileAPI.getProfile()
      .then(res => {
        dispatch(setProfile(res.data));
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          dispatch(logout());
        }
      });
};

export const setProfileData = (user) => (dispatch) => {
  if(user.roleFootball !== null &&  user.roleFootball.length === 0) {
    user.roleFootball = null;
  }
  return profileAPI.editProfile(user)
      .then(res => {
        dispatch(setProfile(res.data));
        return true;
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          dispatch(logout());
        }
        if (err.response && err.response.status === 400) {
          dispatch(stopSubmit('profile-edit',{_error: "Введите дату рождения"}))
        }
      })
};

export const addVideo = (video) => (dispatch) => {
  return profileAPI.addVideo(video)
      .then(res=> {
        dispatch(setVideo(res.data.video));
        return true;
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          dispatch(logout());
        }
      })
};

export default profileReducer;