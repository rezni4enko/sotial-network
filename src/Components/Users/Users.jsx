import React from "react";
import r from './Users.module.css';
import userPhoto from '../../img/avatarka-dlya-skaypa-dlya-parney.jpg';
import { NavLink } from 'react-router-dom';
import { usersAPI } from "../../api/API";


const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   let pagesFive = []
   for (let i = 1; i <= pagesCount; i++) {
      pages = [...pages, i]
      if (i <= 40) pagesFive = [...pagesFive, i]
   }


   return (<div>
      <div>
         {pagesFive.map(p => {
            return <span className={props.currentPage === p && r.selectedPage}
               onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
         })}

      </div>
      {
         props.usersData.map(u => (
            <div className={r.wrapper}>
               <div className={r.profile}>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                  </NavLink>
                  <div>
                     {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                           onClick={() => {
                              props.unfollow(u.id)
                           }}>unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                           onClick={() => {
                              props.follow(u.id)
                           }}>follow</button>
                     }
                  </div>
               </div>
               <div className={r.message}>
                  <div>{u.name}</div>
                  <div>
                     <span>{u.city}, </span>
                     <span>{u.country}</span>
                  </div>
                  <div>{u.status}</div>
               </div>
            </div>
         ))
      }

   </div >)

}


export default Users;