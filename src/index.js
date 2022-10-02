import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Counter.css';


import Counter from './Counter';
import App from './App';
import Ex3App from './Ex3/Ex3App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />, // ex2
    // <Counter /> // ex1
    <Ex3App />
);

