import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './Redux/Store.js'; 
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
