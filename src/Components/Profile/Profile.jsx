import React from 'react';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo';



const Profile = (props) => {

   return (<div>
      < ProfileInfo {...props} profile={props.profilePage.profile} newPostText={props.profilePage.newPostText} />
      <MyPost  {...props} profilePage={props.profilePage} />
   </div>
   )
}

export default Profile;