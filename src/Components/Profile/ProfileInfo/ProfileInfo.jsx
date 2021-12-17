import React from 'react';
import c from '../Profile.module.css';


const ProfileInfo = (props) => {

   let onAddPost = () => {
      props.addPost()
   }
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.postChange(text)
   }

   let newPostElement = React.createRef();

   return <section className={c.Content}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyO-nsN65huml58cFmd5lQ8rX7lVTgmu08Q&usqp=CAU' />
      <div>Text post</div>
      <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement} />
      <div><button onClick={onAddPost}>Add post</button></div>

   </section>

}

export default ProfileInfo;