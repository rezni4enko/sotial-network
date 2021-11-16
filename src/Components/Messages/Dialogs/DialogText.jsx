import React from 'react';
import n from './../Messages.module.css';
import { NavLink } from 'react-router-dom';
// import DialogItem from './DialogItem';


const DialogText = (props) => {
   return (

      <div className='message'>{props.message}</div>


   )
}

export default DialogText;