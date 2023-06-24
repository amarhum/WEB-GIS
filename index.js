import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Panduan from './Components/Panduan';
import Navbar from './Components/Navbar';
import Author from './Components/Author';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Panduan/>
    <App/>
    <Author/>
  </React.StrictMode>
);
reportWebVitals();
