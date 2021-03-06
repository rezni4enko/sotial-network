import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import c from './Profile.module.css';
import ProfileStatus from './ProfileStatus';



const ProfileInfo = (props) => {

   let onAddPost = () => {
      props.addPost()
   }
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.postChange(text)
   }
   if (!props.profile) {
      return <Preloader />
   }

   let newPostElement = React.createRef();

   return <div>
      <div>
         <img className={c.userPhoto} src={props.profile.photos.small} alt="" />
         <span>{props.profile.aboutMe}</span>
      </div>
      <ProfileStatus status={props.status} getUpdateStatus={props.getUpdateStatus} statusChange={props.statusChange} />
      <section className={c.Content}>
         {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyO-nsN65huml58cFmd5lQ8rX7lVTgmu08Q&usqp=CAU' /> */}
         <div>Text post</div>
         <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
         <div><button onClick={onAddPost}>Add post</button></div>
      </section>

   </div >
}

export default ProfileInfo;