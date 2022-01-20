import React from 'react';
import { addNewMessageActionCreator, updateNewMessageChangeActionCreator } from '../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from "react-redux";
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';



const mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
      isAuth: state.auth.isAuth
   }
}

let AuthRedirectComponent = WithAuthRedirect(Messages)

const mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(addNewMessageActionCreator());
      },
      changeMessage: (text) => {
         dispatch(updateNewMessageChangeActionCreator(text))
      }
   }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;