import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './views/Login';
import Home from './views/Home'
import rootReducer from './store/reducers/rootReducer';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(rootReducer);
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/trangchu" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
