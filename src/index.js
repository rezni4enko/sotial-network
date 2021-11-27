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
            <App
            //  state={state}
            //    dispatch={store.dispatch.bind(store)}
            //    store={store}
            />
         </Provider>,
      </React.StrictMode>,
      document.getElementById('root')
   )
);

showRender(store.getState());

// store.subscribe(() => {
//    let state = store.getState();
//    showRender(state);
// });
