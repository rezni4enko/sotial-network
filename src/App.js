import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Music from './Components/Musik/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './Components/Messages/MessagesContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';
import Profile from './Components/Profile/Profile';



function App(props) {

  return (

    <BrowserRouter BrowserRouter >

      <div className="App">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/profile'
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





