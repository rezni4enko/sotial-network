const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

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