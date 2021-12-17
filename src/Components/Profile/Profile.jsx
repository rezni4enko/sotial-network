import React from 'react';
import MyPost from './MyPost/MyPost';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';


const Profile = (props) => {

   return (<div>
      < ProfileInfoContainer />
      <MyPost  {...props} />
   </div>
   )
}

export default Profile;