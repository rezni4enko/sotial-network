import React from 'react';
import n from './Messages.module.css';
import DialogItem from './Dialogs/DialogItem';
import DialogText from './Dialogs/DialogText';
import { addNewMessageActionCreator, updateNewMessageChangeActionCreator } from '../../redux/dialogReducer';


const Messages = (props) => {
   let dialogs = props.dialogsData.map(d => (<DialogItem name={d.name} id={d.id} />));
   let messages = props.messagesData.map(m => (<DialogText message={m.message} />));

   let sendMessage = () => {
      props.dispatch(addNewMessageActionCreator());
   }
   let changeMessage = (e) => {
      props.dispatch(updateNewMessageChangeActionCreator(e.target.value))
   }

   return (
      <div className={n.wrapperMessages}>
         <div className={n.dialogs}>
            {dialogs}
         </div>
         <div className={n.messages}>
            {messages}

            <div className={n.textarea}>
               <textarea value={props.newMessageText}
                  onChange={changeMessage} />
               <div>
                  <button onClick={(sendMessage)}>Add message</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Messages;