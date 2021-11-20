import React from 'react';
import { addNewPostActionCreator, updateNewPostChangeActionCreator } from '../../redux/profileReducer';
import Content from './Content';


const ContentContainer = (props) => {

   let addPost = () => {
      props.dispatch(addNewPostActionCreator());
   }
   let postChange = (text) => {
      props.dispatch(updateNewPostChangeActionCreator(text));
   }

   return <Content
      addPost={addPost}
      postChange={postChange}
      profilePage={props.profilePage}
   />
}

export default ContentContainer;