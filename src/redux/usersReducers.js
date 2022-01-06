import { usersAPI } from "../api/API"


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAl_USERS_COUNT = 'TOTAl_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


let initialState = {
   usersData: [],
   pageSize: 5,
   currentPage: 1,
   totalUsersCount: 2,
   isFetching: true,
   followingInProgress: [],

}
const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            usersData: state.usersData.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }
      case UNFOLLOW:

         return {
            ...state,
            usersData: state.usersData.map(u => {
               if (u.id === action.userId) {

                  return { ...u, followed: false }
               }
               return u
            })
         }
      case SET_USERS:
         return {
            ...state, usersData: action.usersData
         }
      case SET_CURRENT_PAGE:
         return {
            ...state, currentPage: action.currentPage
         }
      case TOTAl_USERS_COUNT:

         return {

            ...state, totalUsersCount: action.count
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state, isFetching: action.isFetching
         }
      case TOGGLE_FOLLOWING_IN_PROGRESS:

         return {
            ...state, followingInProgress: action.isFetchingFollow
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         }

      default: return state;
   }
}


export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (usersData) => ({ type: SET_USERS, usersData })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: TOTAl_USERS_COUNT, count: totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetchingFollow, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetchingFollow, userId })


export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      usersAPI.getUsers(currentPage, pageSize)

         .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))

         })
   }
}

export const unfollow = (userId) => {
   return (dispatch) => {

      dispatch(toggleIsFollowingProgress(true, userId))
      usersAPI.unfollowUser(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
         })
   }
}

export const follow = (userId) => {
   return (dispatch) => {

      dispatch(toggleIsFollowingProgress(true, userId))
      usersAPI.followUser(userId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
         })
   }
}



export default usersReducer;