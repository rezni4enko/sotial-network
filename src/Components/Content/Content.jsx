import React from 'react';
import Post from './Post/Post.jsx';
import c from './Content.module.css';
import { addNewPostActionCreator, updateNewPostChangeActionCreator } from './../../redux/profileReducer';



const Content = (props) => {

   let newPostElement = React.createRef();
   let posts = props.postsData.map(p => (<Post name={p.name} message={p.message} likesCount={p.likesCount} />));

   let addPost = () => {
      let text = newPostElement.current.value;
      props.dispatch(addNewPostActionCreator());
   }
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch(updateNewPostChangeActionCreator(text));
   }

   return <section className={c.Content}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyO-nsN65huml58cFmd5lQ8rX7lVTgmu08Q&usqp=CAU' />
      <div>Text post</div>
      <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
      <div><button onClick={addPost}>Add post</button></div>
      {posts}

   </section>

}

export default Content;