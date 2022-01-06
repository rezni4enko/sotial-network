import { authAPI } from "../api/API";

const SER_USER_DATA = 'SER_USER_DATA'

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,

}
const authReducer = (state = initialState, action) => {

   switch (action.type) {

      case SER_USER_DATA:

         return {
            ...state,
            ...action.data,
            isAuth: true
         }

      default:
         return state;
   }
}

export const setAuthUserData = (id, email, login) => ({ type: SER_USER_DATA, data: { id, email, login } })

export const getAuthUserData = () => (dispatch) => {
   authAPI.me()
      .then(response => {
         if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login))

         }
      })
}


export default authReducer;