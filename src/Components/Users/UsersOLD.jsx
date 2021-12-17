import React from "react";
import r from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {
   let loading = () => {
      if (props.usersData.length === 0) {

         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))

         // props.setUsers([
         //    {
         //       id: 1, photoUrl: 'https://redkrab.ru/media/5803/5-starbucks.jpg',
         //       name: 'Dima K', followed: false, status: 'I am a boss', city: 'Minsk', country: 'Belarus'
         //    },
         //    { 
         //       id: 2, photoUrl: 'https://redkrab.ru/media/5803/5-starbucks.jpg',
         //       name: 'Lena K', followed: false, status: 'I am a boss', city: 'Minsk', country: 'Belarus'
         //    },
         //    {
         //       id: 3, photoUrl: 'https://redkrab.ru/media/5803/5-starbucks.jpg',
         //       name: 'Olga K', followed: true, status: 'I am a boss', city: 'Gomel', country: 'Belarus'
         //    },
         //    {
         //       id: 4, photoUrl: 'https://redkrab.ru/media/5803/5-starbucks.jpg',
         //       name: 'Vova K', followed: false, status: 'I am a boss', city: 'Brest', country: 'Belarus'
         //    },
         //    {
         //       id: 5, photoUrl: 'https://redkrab.ru/media/5803/5-starbucks.jpg',
         //       name: 'Oleg K', followed: true, status: 'I am a boss', city: 'Grodno', country: 'Belarus'
         //    }])
      }
   }
   return (<div>
      <button onClick={loading}>load</button>
      {props.usersData.map(u => (
         <div className={r.wrapper}>
            <div className={r.profile}>
               <img src={u.photoUrl} alt="" />
               <div>
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                     : <button onClick={() => { props.follow(u.id) }}>unfollow</button>}
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
      ))}

   </div>

   )
}

export default Users;