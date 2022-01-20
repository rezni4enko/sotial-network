import { usersAPI, profileAPI } from "../api/API";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS'


let initialState = {
   postsData: [
      { name: 'Victor', message: 'Hello everybody', likesCount: '1' },
      { name: 'Dima', message: 'Hello Dom', likesCount: '15' },
      { name: 'Sveta', message: 'Yes', likesCount: '11' },
      { name: 'Vova', message: 'sometimes', likesCount: '17' },
   ],
   newPostText: 'it-kamasutra',
   profile: null,
   status: ''
}
const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_NEW_POST:
         return {
            ...state,
            postsData: [...state.postsData, {
               name: 'Vova',
               message: state.newPostText,
               likesCount: '0'
            }],
            newPostText: ''
         }

      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         }
      case SET_PROFILE:

         return {
            ...state, profile: action.profile
         }
      case SET_PROFILE_STATUS:

         return {
            ...state, status: action.status
         }
      case UPDATE_PROFILE_STATUS:

         return {
            ...state,
            newStatus: action.status
         }

      default:
         return state;
   }
}

export const addPost = () => ({ type: ADD_NEW_POST })
export const postChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile: profile })
export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status: status })
export const statusChange = (text) => ({ type: UPDATE_PROFILE_STATUS, newText: text })



export const getUserProfile = (userId) => (dispatch) => {
   usersAPI.getProfile(userId).then(response => {
      dispatch(setProfile(response.data))
   })
}

export const getUserProfileStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId).then(response => {

      dispatch(setProfileStatus(response.data))
   })
}

export const getUpdateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).then(response => {


      if (response.data.resultCode === 0) {
         dispatch(setProfileStatus(status))
      }
   })
}


export default profileReducer;