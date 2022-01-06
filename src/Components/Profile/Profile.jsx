import React from 'react';
import { Redirect } from 'react-router-dom';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo';



const Profile = (props) => {

   if (!props.isAuth) {
      return <Redirect to={'/login'} />
   }

   return (<div>
      < ProfileInfo {...props} profile={props.profilePage.profile} newPostText={props.profilePage.newPostText} />
      <MyPost  {...props} profilePage={props.profilePage} />
   </div>
   )
}

export default Profile;