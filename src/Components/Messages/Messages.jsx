import React from 'react';
import n from './Messages.module.css';
import DialogItem from './Dialogs/DialogItem';
import DialogText from './Dialogs/DialogText';


const Messages = (props) => {

   let dialogs = props.dialogPage.dialogsData.map(d => (<DialogItem name={d.name} id={d.id} />));
   let messages = props.dialogPage.messagesData.map(m => (<DialogText message={m.message} />));

   let onChangeMessage = (e) => {
      let text = e.target.value
      props.updateNewMessageChange(text)
   }

   return (
      <div className={n.wrapperMessages}>
         <div className={n.dialogs}>
            {dialogs}
         </div>
         <div className={n.messages}>
            {messages}

            <div className={n.textarea}>
               <textarea value={props.dialogPage.newMessageText}
                  onChange={onChangeMessage} />
               <div>
                  <button onClick={(props.onSendMessage)}>Add message</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Messages;