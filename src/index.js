import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Context, { FirebaseContext } from './store/Context'
import { Firebase } from './firebase/Config'

ReactDOM.render(
  <FirebaseContext.Provider value={{Firebase}}>
     <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

