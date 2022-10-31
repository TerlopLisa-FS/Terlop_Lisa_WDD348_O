import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './pages/About';
import Featured from './components/Featured'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/help" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/about" element={<Featured />} />
    </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
