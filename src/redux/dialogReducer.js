const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
   dialogsData: [
      { id: '1', name: 'Dima' },
      { id: '2', name: 'Victor' },
      { id: '3', name: 'Andrey' },
      { id: '4', name: 'Vova' },
      { id: '5', name: 'Sveta' },
   ],
   messagesData: [
      { message: 'Hi' },
      { message: 'How are you' },
      { message: 'I am funny' }
   ],
   newMessageText: ''
}
const dialogReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messagesData: [...state.messagesData, { message: state.newMessageText }],
            newMessageText: ''
         }

      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newMessage
         }
      default: return state;
   }
}

export const addNewMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })


export default dialogReducer;