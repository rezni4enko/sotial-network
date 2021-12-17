import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducers";
import * as axios from 'axios';
import preloader from '../../img/1488.gif'
import Preloader from "../common/Preloader/Preloader";

class UsersComponent extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

         })
   }
   onPageChanged = (pageNumber) => {
      {
         this.props.toggleIsFetching(true)
         this.props.setCurrentPage(pageNumber)
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.toggleIsFetching(false)
               this.props.setUsers(response.data.items)
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
   toggleIsFetching
})(UsersComponent);