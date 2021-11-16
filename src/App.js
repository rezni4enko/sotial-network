import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Content from './Components/Content/Content.jsx';
import Messages from './Components/Messages/Messages';
import Music from './Components/Musik/Music';
import { BrowserRouter, Route } from 'react-router-dom';



function App(props) {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <Content postsData={props.state.profilePage.postsData}
              dispatch={props.dispatch}
              newPostText={props.state.profilePage.newPostText}
            />} />
          <Route path='/messages'
            render={() => (<Messages dialogsData={props.state.dialogPage.dialogsData}
              messagesData={props.state.dialogPage.messagesData}
              newMessageText={props.state.dialogPage.newMessageText}
              dispatch={props.dispatch} />)} />
          <Route path='/music' render={() => <Music />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;





