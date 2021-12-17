import { addNewPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profileReducer';
import { connect } from "react-redux";
import ProfileInfo from './ProfileInfo';


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

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;