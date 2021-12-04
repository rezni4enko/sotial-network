import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducers";

let mapStateToProps = (state) => {

   return {
      usersData: state.usersPage.usersData
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (usersData) => {
         dispatch(setUsersAC(usersData))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);