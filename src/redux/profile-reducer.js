import { profileAPI } from "../Components/api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
  posts: [
    { id: 1, message: 'Hello! My name is ..' },
    { id: 2, message: 'Hey! It is so cool!' },
    { id: 3, message: 'This is great course' },
    { id: 4, message: 'Thanks' },
    { id: 5, message: 'I love you!' }
  ],
  newPostText: 'Your Text',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }

}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }

}
export const setStatus = (status) =>
  ({ type: SET_STATUS, status })


export default profileReducer;