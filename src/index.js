import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import App from './App'; // Import your main App component
import './style.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

