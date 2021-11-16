import React from 'react';
import n from './../Messages.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
   return (
      <div className={n.dialog}>
         <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
      </div>
   )
}

export default DialogItem;