const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogReducer = (state, action) => {

   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = { message: state.newMessageText }
         state.messagesData.push(newMessage);
         state.newMessageText = '';
         return state;

      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessage;
         return state;
      default: return state;
   }
}

export const addNewMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })


export default dialogReducer;