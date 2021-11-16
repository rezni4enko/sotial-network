import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let store = {
   _state: {
      dialogPage: {
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
      },
      profilePage: {
         postsData: [
            { name: 'Victor', message: 'Hello everybody', likesCount: '1' },
            { name: 'Dima', message: 'Hello Dom', likesCount: '15' },
            { name: 'Sveta', message: 'Yes', likesCount: '11' },
            { name: 'Vova', message: 'sometimes', likesCount: '17' },
         ],
         newPostText: 'it-kamasutra'
      }
   },
   _showRender() {
      console.log('need showRender');
   },

   getState() {
      return this._state;
   },
   subscriber(observer) {
      this._showRender = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
      this._showRender(this._state);
   }
}

window.store = store;
export default store;