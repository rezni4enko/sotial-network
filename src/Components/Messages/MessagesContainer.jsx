import React from 'react';
import { addNewMessageActionCreator, updateNewMessageChangeActionCreator } from '../../redux/dialogReducer';
import Messages from './Messages';


const MessagesContainer = (props) => {

   let sendMessage = () => {
      props.dispatch(addNewMessageActionCreator());
   }
   let changeMessage = (text) => {
      props.dispatch(updateNewMessageChangeActionCreator(text))
   }

   console.log('hello')
   return (
      <Messages
         updateNewMessageChange={changeMessage}
         dialogPage={props.dialogPage}
         onSendMessage={sendMessage} />
   )
}

export default MessagesContainer;