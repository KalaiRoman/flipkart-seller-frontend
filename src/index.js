import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from 'react-router-dom';
import Layoutheader from './Middleware/layoutheader/Layoutheader';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layoutheader>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <App />
    </Layoutheader>
  </BrowserRouter>
);


reportWebVitals();
