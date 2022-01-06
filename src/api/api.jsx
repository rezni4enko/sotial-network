import * as axios from 'axios';
import { setProfile } from '../redux/profileReducer';


const instance = axios.create({
   withCredentials: true,
   headers: {
      'API-KEY': "b2490cca-10ae-448f-b952-86efed4b301f"
   },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
   getUsers(currentPage, pageSize) {

      return instance.get(`users?page=${currentPage}&count=${pageSize}`,
         { withCredentials: true }
      ).then(response => {
         return response.data
      })
   },

   unfollowUser(id) {
      return instance.delete(`follow/${id}`)
   },
   followUser(id) {
      return instance.post(`follow/${id}`)
   },
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   },

}
export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
}

