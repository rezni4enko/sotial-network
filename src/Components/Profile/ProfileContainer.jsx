import { setProfile, postChange, addPost } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from "react-redux";
import * as axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) userId = 2;
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then(response => {
            this.props.setProfile(response.data);
         })
   }
   render() {

      return <Profile {...this.props} profilePage={this.props.profilePage} />
   }
}

const mapStateToProps = (state) => {

   return ({
      profilePage: state.profilePage
   })
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps,
   { setProfile, addPost, postChange })(WithUrlDataContainerComponent);