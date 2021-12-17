import React from 'react';
import Post from './Post/Post.jsx';
import c from './../Profile.module.css';


const MyPost = (props) => {

   let posts = props.profilePage.postsData.map(p => (<Post name={p.name} message={p.message} likesCount={p.likesCount} />));

   return <section className={c.Content}>
      {posts}

   </section>
}

export default MyPost;