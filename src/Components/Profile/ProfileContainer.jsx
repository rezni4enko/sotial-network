import { getUserProfile, postChange, addPost } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from "react-redux";
import React from 'react';
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom';



class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) userId = 2;
      this.props.getUserProfile(userId)
   }
   render() {


      if (!this.props.isAuth) {
         return <Redirect to={'/login'} />
      }
      return <Profile {...this.props} profilePage={this.props.profilePage} />
   }
}

const mapStateToProps = (state) => {

   return ({
      profilePage: state.profilePage,
      isAuth: state.auth.isAuth
   })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps,
   { getUserProfile, addPost, postChange })(WithUrlDataContainerComponent);