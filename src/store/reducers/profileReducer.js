import {profileAPI} from "../../api/api";
import {logout} from "./authReducer";

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
const setStateVideo = video => ({type: SET_VIDEO, video});

export const getProfileData = () => dispatch => {
  profileAPI.getProfile()
      .then(res => {
        dispatch(setProfile(res.data));
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch(logout());
        }
      });
};

export const setProfileData = user => dispatch => {
  profileAPI.editProfile(user)
      .then(res => {
        dispatch(setProfile(res.data));
      })
      .catch(err => {
        console.log(err.response);
      })
};

export const setVideo = video => dispatch => {
  profileAPI.setVideo(video)
      .then(res => {
        dispatch(setStateVideo(res.data));
      })
      .catch(err => {
        console.log(err.response);
      })
};

export default profileReducer;