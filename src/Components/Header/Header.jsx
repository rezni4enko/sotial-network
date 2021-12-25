import React from 'react';
import h from './Header.module.css';
import { NavLink } from 'react-router-dom'


function Header(props) {

   return <header className={h.header}>

      <a><img className={h.header} src='https://redkrab.ru/media/5803/5-starbucks.jpg' /><span></span></a>
      <div className={h.loginBlock}>
         <span className={h.login}>{props.isAuth ? <NavLink to={'/login'}>{props.login}</NavLink> :
            <NavLink to={'/login'}>Login</NavLink>}</span>
      </div>
   </header>

}

export default Header;