import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Music from './Components/Musik/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesContainer from './Components/Messages/MessagesContainer';
import ContentContainer from './Components/Content/ContentContainer';



function App(props) {

  return (

    <BrowserRouter BrowserRouter >

      <div className="App">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <ContentContainer
            // profilePage={props.state.profilePage}
            // dispatch={props.dispatch}
            />} />
          <Route path='/messages'
            render={() => (<MessagesContainer
            // dialogPage={props.state.dialogPage}
            // dispatch={props.dispatch}
            />)} />
          <Route path='/music' render={() => <Music />} />
        </div>
      </div>

    </BrowserRouter >
  );
}

export default App;





