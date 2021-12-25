import React from 'react';
import Post from './Post/Post.jsx';
import c from './../Profile.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';


const MyPost = (props) => {
   if (!(props.profilePage)) return <Preloader />

   let posts = props.profilePage.postsData.map(p => (<Post name={p.name} message={p.message} likesCount={p.likesCount} />));

   return <section className={c.Content}>
      {posts}

   </section>
}

export default MyPost;