const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   postsData: [
      { name: 'Victor', message: 'Hello everybody', likesCount: '1' },
      { name: 'Dima', message: 'Hello Dom', likesCount: '15' },
      { name: 'Sveta', message: 'Yes', likesCount: '11' },
      { name: 'Vova', message: 'sometimes', likesCount: '17' },
   ],
   newPostText: 'it-kamasutra'
}
const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_NEW_POST:
         let newPost = {
            name: 'Vova',
            message: state.newPostText,
            likesCount: '0'
         }
         state.postsData.push(newPost);
         state.newPostText = '';
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;

      default:
         return state;
   }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })
export const updateNewPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;