import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let showRender = () => (
   ReactDOM.render(
      <React.StrictMode>
         <App state={store.getState()} dispatch={store.dispatch.bind(store)}
         />
      </React.StrictMode>,
      document.getElementById('root')
   )
);


showRender(store.getState());

store.subscriber(showRender);
