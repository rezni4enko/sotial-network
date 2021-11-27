import React from 'react';
import Post from './Post/Post.jsx';
import c from './Content.module.css';


const Content = (props) => {

   let newPostElement = React.createRef();
   let posts = props.profilePage.postsData.map(p => (<Post name={p.name} message={p.message} likesCount={p.likesCount} />));

   let onAddPost = () => {
      props.addPost()
   }
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.postChange(text)
   }

   return <section className={c.Content}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyO-nsN65huml58cFmd5lQ8rX7lVTgmu08Q&usqp=CAU' />
      <div>Text post</div>
      <textarea onChange={onPostChange} value={props.profilePage.newPostText} ref={newPostElement} />
      <div><button onClick={onAddPost}>Add post</button></div>

      {posts}

   </section>

}

export default Content;