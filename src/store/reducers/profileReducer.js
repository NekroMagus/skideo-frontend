import {profileAPI} from "../../api/api";
import {logout} from "./authReducer";

const SET_PROFILE = "SET_PROFILE";

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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
};

const setProfile = (payload) => ({type: SET_PROFILE, payload});

export const getProfileData = () => (dispatch) => {
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

export const setProfileData = (user) => (dispatch) => {
  console.log(user);
  profileAPI.editProfile(user)
      .then(res => {
        dispatch(setProfile(res.data));
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      })
};

export default profileReducer;