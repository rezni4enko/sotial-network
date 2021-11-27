import { addNewPostActionCreator, updateNewPostChangeActionCreator } from '../../redux/profileReducer';
import Content from './Content';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
   return {
      profilePage: state.profilePage
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => {
         dispatch(addNewPostActionCreator());
      },
      postChange: (text) => {
         dispatch(updateNewPostChangeActionCreator(text));
      }
   }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;