import { addNewPostActionCreator, updateNewPostChangeActionCreator } from '../../redux/profileReducer';
import Profile from './Profile';
import { connect } from "react-redux";
import * as axios from 'axios';


// class ProfileContainer extends React.Component {
//    componentDidMount() {
//       this.props.toggleIsFetching(true)
//       axios.get(`https://social-network.samuraijs.com/api/1.0/users/2`)
//          .then(response => {
//             this.props.toggleIsFetching(false)
//             this.props.setProfile(response.data.items);
//          })
//    }
// }


// const ProfileContainer = (props) => {

//    //    return (<Profile  {...props} profilePage={props.state.profilePage} />)
//    // }




const mapStateToProps = (state) => {
   return {
      profilePage: state.profilePage
   }
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addPost: () => {
//          dispatch(addNewPostActionCreator());
//       },
//       postChange: (text) => {
//          dispatch(updateNewPostChangeActionCreator(text));
//       }
//    }
// }

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;