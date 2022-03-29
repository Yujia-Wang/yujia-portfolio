import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './page/about';
import {ScrollToTopComponent} from "./components/scrollToTopComponent";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ScrollToTopComponent>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="about" element={<About />} />
              </Routes>
          </ScrollToTopComponent>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
