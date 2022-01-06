import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress } from "../../redux/usersReducers";
import * as axios from 'axios';
import preloader from '../../img/1488.gif'
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/API";
import { getUsersThunkCreator } from '../../redux/usersReducers'

class UsersComponent extends React.Component {

   componentDidMount() {

      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
      // this.props.toggleIsFetching(true)
      // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      //    .then(data => {
      //       this.props.toggleIsFetching(false)
      //       this.props.setUsers(data.items);
      //       this.props.setTotalUsersCount(data.totalCount);

      //    })
   }
   onPageChanged = (pageNumber) => {
      {
         this.props.toggleIsFetching(true)
         this.props.setCurrentPage(pageNumber)
         usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
               this.props.toggleIsFetching(false)
               this.props.setUsers(data.items)
            })
      }
   }
   render() {

      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersData={this.props.usersData}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}



let mapStateToProps = (state) => {

   return {
      usersData: state.usersPage.usersData,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      totalUsersCount: state.usersPage.totalUsersCount,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   }

}
// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId))
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId))
//       },
//       setUsers: (usersData) => {
//          dispatch(setUsersAC(usersData))
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPage(pageNumber))
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(usersTotalCountAC(totalCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(isFetchingAC(isFetching))
//       }
//    }
// }

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching,
   toggleIsFollowingProgress,
   getUsersThunkCreator
})(UsersComponent);