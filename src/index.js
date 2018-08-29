import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from "./pages/Life.js";
import Router from "./router";
import Admin from './admin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
