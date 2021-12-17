import React from "react";
import p from './Post.module.css';

const Post = (props) => {
   return <div className={p.post}>
      <div>{props.name}</div>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="" />
      <div>{props.message}</div>
      <span>{props.likesCount}</span>

   </div>
}

export default Post;