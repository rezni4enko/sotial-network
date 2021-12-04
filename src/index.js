import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";


let showRender = (state) => (

   ReactDOM.render(
      <React.StrictMode>
         <Provider store={store}>
            <App />
         </Provider>,
      </React.StrictMode>,
      document.getElementById('root')
   )
);

showRender(store.getState());


