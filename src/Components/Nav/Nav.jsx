import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Nav.module.css';

const Nav = () => {
   return <nav className={n.nav}>
      <ul>
         <li><NavLink activeClassName={n.active} to='/profile'>Profile</NavLink></li>
         <li><NavLink activeClassName={n.active} to='/messages'>Messages</NavLink></li>
         <li><NavLink activeClassName={n.active} to='/news'>News</NavLink></li>
         <li><NavLink activeClassName={n.active} to='/music'>Music</NavLink></li>
         <li><NavLink activeClassName={n.active} to='/friends'>Friends</NavLink></li>
         <li><NavLink activeClassName={n.active} to='/users'>Users</NavLink></li>
      </ul>
   </nav>
}

export default Nav;