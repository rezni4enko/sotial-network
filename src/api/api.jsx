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
      console.log('This old file profile')
      return profileAPI.getProfile(userId)
   },

}

export const profileAPI = {

   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`)
   },
   updateStatus(status) {

      return instance.put(`profile/status`, { status: status })
   },
}


export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
}

