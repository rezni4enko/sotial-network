import { getUserProfile, postChange, addPost, getUserProfileStatus, getUpdateStatus, statusChange } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from "react-redux";
import React from 'react';
import { withRouter } from 'react-router-dom'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux'


class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) userId = 21435;

      this.props.getUserProfile(userId)
      this.props.getUserProfileStatus(userId)

   }
   render() {
      return <Profile {...this.props} profilePage={this.props.profilePage} status={this.props.status}
         getUpdateStatus={this.props.getUpdateStatus} statusChange={this.props.statusChange} />
   }
}

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {

   return ({
      profilePage: state.profilePage,
      status: state.profilePage.status
   })
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default compose(
   connect(mapStateToProps,
      { getUserProfile, addPost, postChange, getUserProfileStatus, getUpdateStatus, statusChange }
   ))(WithUrlDataContainerComponent)