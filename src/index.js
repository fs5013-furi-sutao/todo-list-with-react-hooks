import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta
        name="description"
        content="Context API と React Hook を使った ToDo タスクを管理する Web アプリ"
      />
      <title>ToDo リスト</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
