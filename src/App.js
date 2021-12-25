import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.jsx';
import Music from './Components/Musik/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './Components/Messages/MessagesContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';



function App(props) {

  return (

    <BrowserRouter BrowserRouter >

      <div className="App">
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/messages'
            render={() => (<MessagesContainer />)} />
          <Route path='/users'
            render={() => (<UsersContainer />)} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>

    </BrowserRouter >
  );
}

export default App;





