import React from 'react';
import { addNewMessageActionCreator, updateNewMessageChangeActionCreator } from '../../redux/dialogReducer';
import Messages from './Messages';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage
   }
}
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;